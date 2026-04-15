import React from "react";
import { Reveal } from "../shared/Reveal";

export const Privacidad = () => {

  return (
    <div className="pt-40 pb-32 px-6 max-w-4xl mx-auto min-h-screen flex flex-col">
      {/* CABECERA DE LA PÁGINA */}
      <Reveal className="mb-12">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-white text-center">
          Política de Privacidad.
        </h1>
        <h3 className="text-2xl font-semibold text-white mb-4">1. RESPONSABLE DEL TRATAMIENTO</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          En cumplimiento de lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la normativa española vigente, se informa al usuario de que los datos personales que facilite serán tratados por:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1 mb-4">
          <li><strong>Denominación social:</strong> Qualisophy S.L.</li>
          <li><strong>Nombre comercial:</strong> Quark Techie</li>
          <li><strong>CIF:</strong> B16444960</li>
          <li><strong>Domicilio social:</strong> Calle Esteban Salazar Chapela 11, 9º, CP 29004 Málaga, España</li>
          <li><strong>Correo electrónico:</strong> <a href="mailto:hello@quark-techie.com" className="text-gray-400 hover:text-white">hello@quark-techie.com</a></li>
          <li><strong>Teléfono:</strong> <a href="tel:+34951768789" className="text-gray-400 hover:text-white">+34 951 768 789</a></li>
        </ul>
      </Reveal>

      {/* 2. FINALIDAD DEL TRATAMIENTO */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">2. FINALIDAD DEL TRATAMIENTO</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Los datos personales recabados a través del sitio web serán utilizados con las siguientes finalidades:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1 mb-4">
          <li>Atender solicitudes de información realizadas por el usuario</li>
          <li>Gestionar consultas enviadas a través de los formularios de contacto</li>
          <li>Elaborar y remitir presupuestos personalizados, en caso de solicitud</li>
        </ul>
        <p className="text-gray-400 font-light leading-relaxed">
          No se realizarán decisiones automatizadas ni elaboración de perfiles.
        </p>
      </Reveal>

      {/* 3. LEGITIMACIÓN */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">3. LEGITIMACIÓN</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          La base legal para el tratamiento de los datos es el consentimiento del usuario, que se otorga mediante la aceptación expresa de esta política al enviar los formularios.
        </p>
        <p className="text-gray-400 font-light leading-relaxed">
          El usuario garantiza que los datos aportados son veraces y se compromete a comunicar cualquier modificación de los mismos.
        </p>
      </Reveal>

      {/* 4. CONSERVACIÓN DE LOS DATOS */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">4. CONSERVACIÓN DE LOS DATOS</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Los datos personales se conservarán durante el tiempo necesario para:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1 mb-4">
          <li>Atender la solicitud del usuario</li>
          <li>Mantener comunicaciones relacionadas con la consulta</li>
        </ul>
        <p className="text-gray-400 font-light leading-relaxed">
          Y, en su caso, durante los plazos legalmente exigidos para el cumplimiento de obligaciones legales.
        </p>
      </Reveal>

      {/* 5. DESTINATARIOS DE LOS DATOS */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">5. DESTINATARIOS DE LOS DATOS</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          No se cederán datos a terceros, salvo obligación legal.
        </p>
        <p className="text-gray-400 font-light leading-relaxed">
          No se prevén transferencias internacionales de datos.
        </p>
      </Reveal>

      {/* 6. DERECHOS DEL USUARIO */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">6. DERECHOS DEL USUARIO</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          El usuario tiene derecho a:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1 mb-4">
          <li>Acceder a sus datos personales</li>
          <li>Solicitar la rectificación de datos inexactos</li>
          <li>Solicitar su supresión cuando los datos ya no sean necesarios</li>
          <li>Solicitar la limitación del tratamiento</li>
          <li>Oponerse al tratamiento</li>
          <li>Solicitar la portabilidad de sus datos</li>
        </ul>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Para ejercer estos derechos, el usuario puede enviar una solicitud a:
        </p>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          <strong>Email:</strong> <a href="mailto:hello@quark-techie.com" className="text-gray-400 hover:text-white">hello@quark-techie.com</a>
        </p>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          La solicitud deberá ir acompañada de una copia de un documento acreditativo de identidad.
        </p>
        <p className="text-gray-400 font-light leading-relaxed">
          Asimismo, el usuario tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que sus derechos han sido vulnerados.
        </p>
      </Reveal>

      {/* 7. MEDIDAS DE SEGURIDAD */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">7. MEDIDAS DE SEGURIDAD</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Qualisophy S.L. adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
        </p>
        <p className="text-gray-400 font-light leading-relaxed">
          No obstante, el usuario debe ser consciente de que las medidas de seguridad en Internet no son inexpugnables.
        </p>
      </Reveal>

      {/* 8. DATOS FACILITADOS POR EL USUARIO */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">8. DATOS FACILITADOS POR EL USUARIO</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          El usuario garantiza que:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1">
          <li>Es mayor de edad o tiene capacidad legal suficiente</li>
          <li>Los datos facilitados son verdaderos, exactos y actualizados</li>
          <li>No facilita datos de terceros sin su consentimiento</li>
        </ul>
      </Reveal>

      {/* 9. MODIFICACIONES DE LA POLÍTICA DE PRIVACIDAD */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">9. MODIFICACIONES DE LA POLÍTICA DE PRIVACIDAD</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Qualisophy S.L. se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas o jurisprudenciales.
        </p>
        <p className="text-gray-400 font-light leading-relaxed">
          En dichos casos, se anunciarán los cambios en esta misma página.
        </p>
      </Reveal>

      {/* 10. CONTACTO */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">10. CONTACTO</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Para cualquier cuestión relacionada con esta Política de Privacidad, puede contactar con:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1">
          <li>Email: <a href="mailto:hello@quark-techie.com" className="text-gray-400 hover:text-white">hello@quark-techie.com</a></li>
          <li>Teléfono: <a href="tel:+34951768789" className="text-gray-400 hover:text-white">+34 951 768 789</a></li>
        </ul>
      </Reveal>
    </div>
  );
};