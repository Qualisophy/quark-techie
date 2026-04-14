import React from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { Input } from "../shared/ui/Input";
import { Textarea } from "../shared/ui/Textarea";
import { Button } from "../shared/ui/Button";
import { toast } from "../shared/ui/Toast";

export const Contact = () => (
  <div className="min-h-screen pt-40 pb-32 px-6 max-w-5xl mx-auto flex items-center justify-center">
    <Reveal className="w-full">
      <div className="w-full p-10 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/8 backdrop-blur-3xl relative overflow-hidden">
        {/* Luces de cristal en el formulario */}
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
              Arquitecturas modernas requieren conversaciones directas. Déjanos
              tus coordenadas.
            </p>
            <div className="space-y-4 font-light text-gray-300">
              <p>Madrid, España</p>
              <p>hola@quarktechie.com</p>
              <p>+34 600 000 000</p>
            </div>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              
              const isSuccess = true; 

              if (isSuccess) {
                toast({
                  title: "¡Mensaje enviado!",
                  description: "Hemos recibido tu mensaje, nuestro equipo te contactará en menos de 24 horas.",
                  type: "success",
                });
                e.currentTarget.reset();
              } else {
                toast({
                  title: "No hemos podido recibir tu solicitud",
                  description: "No se ha podido establecer la conexión con el servidor.",
                  type: "error",
                });
              }
            }}
          >
            <div>
              <Input type="text" required placeholder="Nombre o Empresa" />
            </div>
            <div>
              <Input type="email" required placeholder="Email corporativo" />
            </div>
            <div>
              <Textarea
                rows={3}
                required
                placeholder="Visión del proyecto..."
              />
            </div>

            <Button type="submit" size="lg" fullWidth>
              Enviar Mensaje <ChevronRight size={18} />
            </Button>
          </form>
        </div>
      </div>
    </Reveal>
  </div>
);
