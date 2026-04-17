import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
  X,
} from "lucide-react";

// 1. Tipos de datos
export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
}

// 2. Función disparadora (Pub/Sub nativo)
export const toast = ({
  title,
  description,
  type = "info",
}: Omit<ToastMessage, "id">) => {
  const event = new CustomEvent("quark-toast", {
    detail: { id: Date.now().toString(), title, description, type },
  });
  window.dispatchEvent(event);
};

// 3. El Contenedor de Toasts
export const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleAddToast = (event: Event) => {
      const customEvent = event as CustomEvent<ToastMessage>;
      setToasts((prev) => [...prev, customEvent.detail]);

      // Auto-eliminar después de 5 segundos
      setTimeout(() => {
        removeToast(customEvent.detail.id);
      }, 5000);
    };

    window.addEventListener("quark-toast", handleAddToast);
    return () => window.removeEventListener("quark-toast", handleAddToast);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div
      aria-live="polite"
      className={`
        fixed z-[100] flex flex-col gap-3 pointer-events-none
        bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[360px]
        sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0 sm:w-[360px]
      `}
    >
      {/* Hemos cambiado la animación de translateX a translateY. 
        Desplazarse de abajo hacia arriba queda perfecto tanto centrado en móvil 
        como en la esquina en escritorio.
      */}
      <style>{`
        @keyframes toast-in {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-toast-in { animation: toast-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
      `}</style>

      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} onClose={() => removeToast(t.id)} />
      ))}
    </div>
  );
};

// 4. El componente individual de Toast
const ToastItem = ({
  toast,
  onClose,
}: {
  toast: ToastMessage;
  onClose: () => void;
}) => {
  const styles = {
    success: {
      border: "border-state-success/40",
      shadow: "shadow-[0_4px_24px_rgba(74,222,128,0.2)]",
      icon: <CheckCircle2 className="text-state-success" size={20} />,
    },
    error: {
      border: "border-state-error/40",
      shadow: "shadow-[0_4px_24px_rgba(248,113,113,0.2)]",
      icon: <AlertCircle className="text-state-error" size={20} />,
    },
    warning: {
      border: "border-state-warning/40",
      shadow: "shadow-[0_4px_24px_rgba(251,191,36,0.2)]",
      icon: <AlertTriangle className="text-state-warning" size={20} />,
    },
    info: {
      border: "border-[#5EE7DF]/40",
      shadow: "shadow-[0_4px_24px_rgba(94,231,223,0.2)]",
      icon: <Info className="text-[#5EE7DF]" size={20} />,
    },
  };

  const currentStyle = styles[toast.type || "info"];

  return (
    <div
      onClick={onClose}
      className={`
        animate-toast-in pointer-events-auto cursor-pointer
        relative overflow-hidden rounded-2xl p-4
        bg-white/[0.03] backdrop-blur-xl border ${currentStyle.border} ${currentStyle.shadow}
        flex items-start gap-3 transition-all duration-300 hover:-translate-y-1
      `}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      <div className="flex-shrink-0 mt-0.5">{currentStyle.icon}</div>

      <div className="flex-1">
        <h4 className="text-sm font-medium text-white">{toast.title}</h4>
        {toast.description && (
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            {toast.description}
          </p>
        )}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="flex-shrink-0 text-gray-500 hover:text-white transition-colors opacity-50 hover:opacity-100"
      >
        <X size={16} />
      </button>
    </div>
  );
};
