import React from "react";
import { Reveal } from "../shared/Reveal";

export const Privacidad = () => {
  return (
    <div className="pt-40 pb-32 px-6 max-w-4xl mx-auto min-h-screen flex flex-col">
      {/* CABECERA DE LA PÁGINA */}
      <Reveal className="mb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-white">
          Política de Privacidad.
        </h1>
       
        <p className="text-gray-400 font-light leading-relaxed mb-4 text-left">
          La presente Política de Privacidad describe cómo Quark Techie (en adelante, "la Empresa", "nosotros" o "nuestro") recopila, utiliza y protege la información personal de los usuarios que visitan nuestro sitio web <a href="https://www.quark-techie.com/" className="text-white hover:underline">https://www.quark-techie.com/</a> y utilizan nuestros servicios de consultoría. Cumplimos estrictamente con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea y la Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD) de España.
        </p>
      </Reveal>

      {/* 1. IDENTIDAD DEL RESPONSABLE */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">1. IDENTIDAD DEL RESPONSABLE DEL TRATAMIENTO</h3>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1 mb-4">
          <li><strong>Titular:</strong> Francisco Antonio Guerrero Sánchez (Quark Techie)</li>
          <li><strong>NIF/CIF:</strong> B16444960</li>
          <li><strong>Domicilio social:</strong> Calle Esteban Salazar Chapela 11, Málaga, España</li>
          <li><strong>Correo electrónico:</strong> <a href="mailto:hello@quark-techie.com" className="text-gray-400 hover:text-white">hello@quark-techie.com</a></li>
          <li><strong>Delegado de Protección de Datos (DPO):</strong> No es legalmente exigible de conformidad con el artículo 37 del RGPD.</li>
        </ul>
      </Reveal>

      {/* 2. DATOS PERSONALES RECOPILADOS */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">2. DATOS PERSONALES RECOPILADOS</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Recopilamos y tratamos diferentes tipos de datos personales para garantizar el correcto funcionamiento de nuestro sitio y la prestación de nuestros servicios:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-2 mb-4">
          <li><strong>Datos de contacto:</strong> Nombre, apellidos, dirección de correo electrónico, número de teléfono y empresa, proporcionados voluntariamente a través de nuestros formularios de contacto.</li>
          <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, sistema operativo, páginas visitadas y tiempo de permanencia en el sitio web.</li>
          <li><strong>Datos de interacción:</strong> Información sobre cómo el usuario interactúa con nuestros correos electrónicos y comunicaciones.</li>
        </ul>
      </Reveal>

      {/* 3. HERRAMIENTAS DE ANALÍTICA (CookieYes) */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">3. HERRAMIENTAS DE ANALÍTICA Y GESTIÓN DE COOKIES (COOKIEYES)</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Este sitio web utiliza tecnologías de seguimiento para analizar el tráfico y mejorar la experiencia del usuario.
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-2 mb-4">
          <li><strong>Plataforma de Gestión del Consentimiento:</strong> Utilizamos CookieYes para gestionar el consentimiento de los usuarios sobre el uso de cookies. CookieYes nos permite registrar sus preferencias de forma segura y garantizar que no se instalen cookies no esenciales sin su permiso explícito.</li>
          <li><strong>Herramientas de Analítica:</strong> Implementamos herramientas de terceros (como Google Analytics) para medir y analizar el comportamiento de los usuarios en el sitio web. Estas herramientas recopilan datos de forma agregada y anonimizada.</li>
          <li><strong>Gestión de preferencias:</strong> Puede modificar o retirar su consentimiento en cualquier momento haciendo clic en el widget de configuración de cookies visible en la esquina de nuestro sitio web.</li>
        </ul>
      </Reveal>

      {/* 4. FINALIDAD Y BASE LEGAL */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">4. FINALIDAD Y BASE LEGAL DEL TRATAMIENTO</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          El tratamiento de sus datos se realiza bajo las siguientes bases legales y finalidades:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1 mb-4">
          <li><strong>Consentimiento expreso:</strong> Para responder a consultas enviadas a través del formulario de contacto y para la instalación de cookies analíticas/publicitarias.</li>
          <li><strong>Ejecución de medidas precontractuales/contractuales:</strong> Para la evaluación de su caso y la posible prestación de servicios de consultoría.</li>
          <li><strong>Interés legítimo:</strong> Para garantizar la seguridad de nuestra web, prevenir fraudes y mejorar el rendimiento técnico de nuestra plataforma.</li>
          <li><strong>Obligación legal:</strong> Para el cumplimiento de obligaciones fiscales y legales vigentes.</li>
        </ul>
      </Reveal>

      {/* 5. TRANSFERENCIAS INTERNACIONALES */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">5. TRANSFERENCIAS INTERNACIONALES DE DATOS</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Dado que operamos a nivel internacional, sus datos podrían ser transferidos y almacenados fuera del Espacio Económico Europeo (EEE). En caso de realizarse transferencias internacionales (por ejemplo, mediante el uso de proveedores de alojamiento web o software de gestión en la nube ubicados en EE. UU.), garantizamos que dichas transferencias se realizan bajo mecanismos legales válidos:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1">
          <li>Decisiones de adecuación de la Comisión Europea.</li>
          <li>Cláusulas Contractuales Tipo (CCT) aprobadas por la Comisión Europea.</li>
        </ul>
      </Reveal>

      {/* 6. DURACIÓN DEL ALMACENAMIENTO */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">6. DURACIÓN DEL ALMACENAMIENTO</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Conservaremos sus datos personales únicamente durante el tiempo necesario para cumplir con los fines para los que fueron recopilados:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-2">
          <li><strong>Datos de consultas:</strong> Hasta la resolución de la misma, y un máximo de 1 año posterior en caso de no formalizar una relación comercial.</li>
          <li><strong>Datos de clientes:</strong> Durante la vigencia de la relación contractual y, posteriormente, durante los plazos legalmente exigibles (generalmente 5 años para responsabilidades civiles y 6 años para cuestiones mercantiles y fiscales).</li>
          <li><strong>Datos de cookies:</strong> Según la caducidad específica de cada cookie gestionada a través de CookieYes.</li>
        </ul>
      </Reveal>

      {/* 7. DERECHOS DE LOS USUARIOS */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">7. DERECHOS DE LOS USUARIOS</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Cualquier usuario puede ejercer de forma gratuita los siguientes derechos sobre sus datos personales:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1">
          <li><strong>Derecho de Acceso:</strong> Conocer qué datos personales estamos tratando.</li>
          <li><strong>Derecho de Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
          <li><strong>Derecho de Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
          <li><strong>Derecho de Oposición:</strong> Oponerse al tratamiento de sus datos para fines específicos.</li>
          <li><strong>Derecho a la Limitación:</strong> Solicitar la suspensión del tratamiento en casos concretos.</li>
          <li><strong>Derecho a la Portabilidad:</strong> Recibir sus datos en un formato estructurado y de uso común.</li>
        </ul>
      </Reveal>

      {/* 8. PROCESO EJERCICIO DE DERECHOS */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">8. PROCESO PARA EJERCER LOS DERECHOS</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Para ejercer cualquiera de los derechos mencionados, envíe un correo electrónico a <strong>hello@quark-techie.com</strong> indicando en el asunto "Ejercicio de Derechos LOPD/RGPD" y adjuntando una copia de su DNI, pasaporte u otro documento equivalente para verificar su identidad.
        </p>
        <p className="text-gray-400 font-light leading-relaxed">
          Asimismo, el usuario tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que sus derechos han sido vulnerados.
        </p>
      </Reveal>

      {/* 9. MEDIDAS DE SEGURIDAD */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">9. MEDIDAS DE SEGURIDAD</h3>
        <p className="text-gray-400 font-light leading-relaxed">
          Hemos implementado medidas de seguridad técnicas y organizativas robustas (como encriptación SSL, firewalls y controles de acceso restringido) para proteger sus datos contra el acceso no autorizado, la pérdida, la alteración o la destrucción.
        </p>
      </Reveal>
    </div>
  );
};