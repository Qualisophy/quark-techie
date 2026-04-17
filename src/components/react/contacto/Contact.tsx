import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { Input } from "../shared/ui/Input";
import { Textarea } from "../shared/ui/Textarea";
import { Button } from "../shared/ui/Button";
import { toast } from "../shared/ui/Toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // -----------------------------
  // VALIDACIÓN DE CAMPOS
  // -----------------------------
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value) return "El nombre es obligatorio";
        if (value.trim().length < 2)
          return "El nombre debe tener al menos 2 caracteres";
        if (!/^[a-zA-ZÀ-ÿ\s\-]+$/.test(value))
          return "El nombre solo permite letras y espacios";
        return "";

      case "email":
        if (!value) return "El email es obligatorio";
        if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,63}$/.test(value))
          return "Email inválido";
        return "";

      case "message":
        if (!value) return "El mensaje es obligatorio";
        if (value.trim().length < 10)
          return "El mensaje debe tener al menos 10 caracteres";
        return "";

      default:
        return "";
    }
  };

  const fields = ["name", "email", "message"] as const;

  // -----------------------------
  // CAMBIOS
  // -----------------------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  // -----------------------------
  // FOCO
  // -----------------------------
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  // -----------------------------
  // ENVIAR
  // -----------------------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      message: true,
    });

    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });

    setErrors(newErrors);

    let hasErrors = false;

    fields.forEach((field) => {
      const value = formData[field];
      const error = newErrors[field];

      if (!value) {
        hasErrors = true;
        toast({
          type: "error",
          title: "Error",
          description: error,
        });
        return;
      }

      if (error) {
        hasErrors = true;
        toast({
          type: "error",
          title: "Error",
          description: error,
        });
      }
    });

    if (hasErrors) return;

    // Mensaje Enviado (simulación de API)
    setIsSubmitting(true);

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setTouched({});

    toast({
      type: "success",
      title: "Mensaje enviado",
      description: "Nuestro equipo te responderá lo antes posible.",
    });

    setTimeout(() => setSuccess(false), 4000);

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-40 pb-32 px-6 max-w-5xl mx-auto flex items-center justify-center">
      <Reveal className="w-full">
        <div className="w-full p-10 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/8 backdrop-blur-3xl relative overflow-hidden">

          {/* luces */}
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#288B88]/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#E8D33F]/10 blur-[100px] rounded-full pointer-events-none" />

          {success && (
            <p className="text-green-400 mb-6 text-sm">
              Mensaje enviado correctamente
            </p>
          )}

          {errors.general && (
            <p className="text-red-400 mb-6 text-sm">
              {errors.general}
            </p>
          )}

          <div className="grid md:grid-cols-2 gap-16">

            {/* BLOQUE IZQUIERDO: CTA y Datos de Contacto */}
            <div>
              <h1 className="text-4xl md:text-h2-brand font-semibold mb-6 text-white">
                Iniciemos el
                <br />
                proyecto.
              </h1>

              <p className="text-gray-400 mb-12">
                Arquitecturas modernas requieren conversaciones directas.
              </p>

              <div className="space-y-4 text-gray-300 font-light">
                <p className="hover:text-white transition-colors">
                  <a href="https://maps.app.goo.gl/VStbnoiDd58fEe8m9">
                    Calle Esteban Salazar Chapela 11, 9º
                    <br />
                    Málaga (España)
                  </a>
                </p>
                <p className="hover:text-white transition-colors">
                  <a href="mailto:hello@quark-techie.com">
                    hello@quark-techie.com
                  </a>
                </p>
                <p className="hover:text-white transition-colors">
                  <a href="tel:+34951768789">
                    +34 951 768 789
                  </a>
                </p>
              </div>
            </div>

            {/* BLOQUE DERECHO: Formulario de Contacto */}
            <form onSubmit={handleSubmit} className="space-y-6">

              <Input
                name="name"
                placeholder="Nombre o Empresa"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <p className="text-red-400 text-xs">{errors.name}</p>
              )}

              <Input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <p className="text-red-400 text-xs">{errors.email}</p>
              )}

              <Textarea
                name="message"
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto..."
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.message && errors.message && (
                <p className="text-red-400 text-xs">{errors.message}</p>
              )}

              <Button
                type="submit"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                className={`
                  transition-all duration-300
                  ${
                    isSubmitting
                      ? "opacity-40 cursor-not-allowed shadow-none"
                      : "opacity-100 cursor-pointer shadow-none hover:shadow-lg"
                  }
                `}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                <ChevronRight size={18} />
              </Button>
            </form>
          </div>

          {/* BLOQUE INFERIOR: Ubicación de Google Maps */}
          <div className="w-full h-full flex justify-center items-center mt-20">
            <div className="w-[100%] aspect-[7/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.3532008746565!2d-4.4711954!3d36.690049599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f9e53484b7f1%3A0x1c89c125f2013c66!2sC.%20Esteban%20Salazar%20Chapela%2C%2011%2C%20Churriana%2C%2029004%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1776244446813!5m2!1ses!2ses"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};