import React from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";

export const Contact = () => (
  <div className="min-h-screen pt-40 pb-32 px-6 max-w-5xl mx-auto flex items-center justify-center">
    <Reveal className="w-full">
      <div className="w-full p-10 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/8 backdrop-blur-3xl relative overflow-hidden">
        {/* Luces de cristal en el formulario */}
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#288B88]/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#E8D33F]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-white">
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
              alert("Mensaje encriptado y enviado.");
            }}
          >
            <div>
              <input
                type="text"
                required
                className="w-full bg-black/50 border border-white/10 rounded-2xl p-5 text-white focus:border-[#288B88] focus:bg-black/80 outline-none transition-all placeholder:text-gray-600 font-light"
                placeholder="Nombre o Empresa"
              />
            </div>
            <div>
              <input
                type="email"
                required
                className="w-full bg-black/50 border border-white/10 rounded-2xl p-5 text-white focus:border-[#288B88] focus:bg-black/80 outline-none transition-all placeholder:text-gray-600 font-light"
                placeholder="Email corporativo"
              />
            </div>
            <div>
              <textarea
                rows={3}
                required
                className="w-full bg-black/50 border border-white/10 rounded-2xl p-5 text-white focus:border-[#288B88] focus:bg-black/80 outline-none transition-all placeholder:text-gray-600 font-light resize-none"
                placeholder="Visión del proyecto..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-medium py-5 rounded-2xl hover:scale-[1.02] transition-transform duration-300 flex justify-center items-center gap-2"
            >
              Enviar Mensaje <ChevronRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </Reveal>
  </div>
);
