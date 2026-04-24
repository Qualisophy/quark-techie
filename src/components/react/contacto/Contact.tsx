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
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    try {
      // Usamos la variable de entorno de Astro
      const webhookUrl = import.meta.env.PUBLIC_MAKE_WEBHOOK_URL;

      if (!webhookUrl) {
        throw new Error("URL del Webhook no configurada en el .env");
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Hemos recibido tu mensaje, nuestro equipo te contactará en menos de 24 horas.",
          type: "success",
        });
        formElement.reset(); 
      } else {
        throw new Error("Respuesta no exitosa del servidor");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast({
        title: "No hemos podido enviar tu solicitud",
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
          style={{ contain: "layout paint" }}
        >
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), rgba(255,255,255,0) 40%)`,
            }}
          />
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#288B88]/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#E8D33F]/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-h2-brand font-semibold tracking-tighter mb-6 text-white">
                Iniciemos el
                <br />
                proyecto.
              </h1>
              <p className="text-lg text-gray-400 font-light mb-12">
                Arquitecturas modernas requieren conversaciones directas.
                Déjanos tus coordenadas.
              </p>
              <div className="space-y-4 font-light text-gray-300">
                <p>Madrid, España</p>
                <p>hola@quarktechie.com</p>
                <p>+34 600 000 000</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* FIX MAKE: Añadimos este campo oculto para que pase el filtro de tu blueprint */}
              <input type="hidden" name="type" value="contact" />

              <div>
                <Input
                  type="text"
                  name="name"
                  required
                  placeholder="Nombre o Empresa"
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
                />
              </div>

              <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}{" "}
                <ChevronRight size={18} />
              </Button>
            </form>
          </div>
        </div>
      </Reveal>
    </div>
  );
};