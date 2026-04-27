import React, { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { Input } from "../shared/ui/Input";
import { Textarea } from "../shared/ui/Textarea";
import { Button } from "../shared/ui/Button";
import { toast } from "../shared/ui/Toast";

export const Contact = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    // --- VALIDACIÓN TICKET QTW-64 ---
    
    // 1. Aplicar Trim (limpiar espacios en blanco)
    const nameStr = String(data.name).trim();
    const emailStr = String(data.email).trim();
    const messageStr = String(data.message).trim();

    // 2. Reglas de Validación
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validación Nombre (2-100 caracteres)
    if (nameStr.length < 2 || nameStr.length > 100) {
      toast({ 
        title: "Nombre o Empresa", 
        description: "Por favor, ingresa tu nombre o el de tu empresa (entre 2 y 100 caracteres).", 
        type: "error" 
      });
      return;
    }

    // Validación Email (Formato estándar)
    if (!EMAIL_REGEX.test(emailStr)) {
      toast({ 
        title: "Email corporativo", 
        description: "Por favor, ingresa un correo electrónico válido.", 
        type: "error" 
      });
      return;
    }

    // Validación Mensaje (20-1000 caracteres)
    if (messageStr.length < 20 || messageStr.length > 1000) {
      toast({ 
        title: "Visión del proyecto", 
        description: "Por favor, cuéntanos un poco más sobre la visión de tu proyecto (mínimo 20 caracteres).", 
        type: "error" 
      });
      return;
    }

    // Si todo es correcto, procedemos al envío
    setIsSubmitting(true);

    try {
      const webhookUrl = import.meta.env.PUBLIC_MAKE_WEBHOOK_URL;
      if (!webhookUrl) throw new Error("URL del Webhook no configurada");

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...data,
            name: nameStr,   // Enviamos los datos ya limpios con trim
            email: emailStr,
            message: messageStr
        }),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Hemos recibido tu mensaje correctamente.",
          type: "success",
        });
        formElement.reset(); 
      } else {
        throw new Error("Error en el servidor");
      }
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Revisa tu conexión o inténtalo más tarde.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-32 px-6 max-w-5xl mx-auto flex items-center justify-center">
      <Reveal className="w-full">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full p-10 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/8 backdrop-blur-3xl relative overflow-hidden isolate z-0"
        >
          {/* Estilos de fondo */}
          <div className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), rgba(255,255,255,0) 40%)`,
            }}
          />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-h2-brand font-semibold tracking-tighter mb-6 text-white">
                Iniciemos el <br /> proyecto.
              </h1>
              <p className="text-lg text-gray-400 font-light mb-12">
                Arquitecturas modernas requieren conversaciones directas. Déjanos tus coordenadas.
              </p>
              <div className="space-y-4 font-light text-gray-300">
                <p>Málaga, España</p>
                <p>hello@quark-techie.com</p>
                <p>+34 951 768 789</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="type" value="contact" />
              
              <div>
                <Input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="Nombre o Empresa" 
                  maxLength={100} 
                />
              </div>

              <div>
                <Input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="Email corporativo" 
                />
              </div>

              <div>
                <Textarea 
                  name="message" 
                  rows={3} 
                  required 
                  placeholder="Visión del proyecto..." 
                  maxLength={1000}
                />
              </div>

              <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"} <ChevronRight size={18} />
              </Button>
            </form>
          </div>
        </div>
      </Reveal>
    </div>
  );
};