import React from "react";
import { Check } from "lucide-react";

export interface Step {
  label: string;
  description: string; // <-- Nuevo campo para la explicación
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  className = "",
}) => {
  // Validamos el índice para evitar errores si el paso actual supera el array
  const activeStepIndex = Math.min(currentStep, steps.length - 1);
  const activeStep = steps[activeStepIndex];

  return (
    <div className={`w-full ${className}`}>
      <style>{`
        @keyframes step-pulse-active {
          0%, 100% { box-shadow: 0 0 12px rgba(243, 200, 100, 0.25); }
          50% { box-shadow: 0 0 24px rgba(243, 200, 100, 0.5); }
        }
        .animate-step-pulse {
          animation: step-pulse-active 2s ease infinite;
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-content-change {
          animation: fadeInScale 0.4s ease-out forwards;
        }
      `}</style>

      {/* Visualización de los pasos (Círculos y Líneas) */}
      <div className="flex items-center mb-12">
        {steps.map((step, index) => {
          const isComplete = index < currentStep;
          const isActive = index === currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div
              key={index}
              className={`flex items-center ${isLast ? "flex-none" : "flex-1"}`}
            >
              <div className="flex items-center gap-3">
                {/* El Círculo (Nodo) */}
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium shrink-0
                    transition-all duration-500 ease-in-out backdrop-blur-sm
                    ${
                      isComplete
                        ? "bg-secondary/20 border-2 border-secondary/60 text-white shadow-[0_0_16px_rgba(91,123,123,0.25)] scale-105"
                        : isActive
                          ? "bg-primary/20 border-2 border-primary/60 text-white animate-step-pulse"
                          : "bg-white/5 border-2 border-white/10 text-gray-400"
                    }
                  `}
                >
                  {isComplete ? <Check size={16} strokeWidth={3} /> : index + 1}
                </div>

                {/* Título del Paso */}
                <span
                  className={`text-sm whitespace-nowrap hidden md:block transition-opacity duration-300 ${
                    isActive
                      ? "opacity-100 text-white font-semibold"
                      : "opacity-40 text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {!isLast && (
                <div
                  className={`flex-1 h-[1px] mx-4 transition-colors duration-500 ${isComplete ? "bg-secondary/50" : "bg-white/10"}`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ÁREA DE EXPLICACIÓN DINÁMICA */}
      <div
        key={activeStepIndex} // La 'key' fuerza a React a reiniciar la animación al cambiar de paso
        className="animate-content-change bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl"
      >
        <h4 className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">
          Paso {activeStepIndex + 1}: {activeStep.label}
        </h4>
        <p className="text-xl text-gray-300 font-light leading-relaxed">
          {activeStep.description}
        </p>
      </div>
    </div>
  );
};
