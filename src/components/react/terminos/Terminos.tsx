import React from "react";
import { Reveal } from "../shared/Reveal";

export const Terminos = () => {
  return (
    <div className="pt-40 pb-32 px-6 max-w-4xl mx-auto min-h-screen flex flex-col">
      {/* CABECERA DE LA PÁGINA */}
      <Reveal className="mb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-white">
          Términos y Condiciones de Uso.
        </h1>
        <p className="text-gray-500 font-light italic mb-8 text-center">
  Fecha de última actualización: 27 de Abril de 2026
</p>
      </Reveal>

      {/* 1. IDENTIFICACIÓN */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">1. IDENTIFICACIÓN DEL PRESTADOR DE SERVICIOS</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular del sitio web <a href="https://www.quark-techie.com/" className="text-white hover:underline">https://www.quark-techie.com/</a>:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1 mb-4">
          <li><strong>Titular:</strong> Francisco Antonio Guerrero Sánchez (Quark Techie)</li>
          <li><strong>NIF/CIF:</strong> B16444960</li>
          <li><strong>Domicilio social:</strong> Calle Esteban Salazar Chapela 11, Málaga, España</li>
          <li><strong>Correo electrónico:</strong> <a href="mailto:hello@quark-techie.com" className="text-gray-400 hover:text-white">hello@quark-techie.com</a></li>
          <li><strong>Delegado de Protección de Datos (DPO):</strong> No es legalmente exigible de conformidad con el artículo 37 del RGPD.</li>
        </ul>
      </Reveal>

      {/* 2. ACEPTACIÓN */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">2. ACEPTACIÓN DE LOS TÉRMINOS</h3>
        <p className="text-gray-400 font-light leading-relaxed">
          El acceso y uso de este sitio web le atribuye la condición de "Usuario", lo cual implica la aceptación plena y sin reservas de todas las disposiciones incluidas en estos Términos y Condiciones. Si no está de acuerdo con alguna de las condiciones establecidas, le rogamos que se abstenga de utilizar este sitio.
        </p>
      </Reveal>

      {/* 3. DESCRIPCIÓN DE SERVICIOS */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">3. DESCRIPCIÓN DE LOS SERVICIOS</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Quark Techie es una firma de consultoría que ofrece servicios a nivel local, europeo e internacional. La información contenida en el sitio web tiene un carácter puramente informativo sobre las áreas de práctica y servicios disponibles.
        </p>
        <p className="text-gray-400 font-light leading-relaxed">
          <strong>Contratación de servicios:</strong> La contratación efectiva de los servicios de consultoría, así como la definición de honorarios, presupuestos y métodos de pago, no se realiza a través de este sitio web. Todos los acuerdos comerciales, contratos de consultoría y gestiones de pago se tramitan de forma directa, privada y personalizada durante las reuniones formales con los clientes.
        </p>
      </Reveal>

      {/* 4. USO Y RESTRICCIONES */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">4. USO DEL SITIO WEB Y RESTRICCIONES</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          El Usuario se compromete a utilizar el sitio web, sus contenidos y servicios de conformidad con la ley, la moral, el orden público y los presentes Términos y Condiciones. Queda terminantemente prohibido:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-2">
          <li>Utilizar el sitio web con fines ilícitos, lesivos de los derechos de terceros o que puedan dañar la reputación de la Empresa.</li>
          <li>Introducir o difundir virus informáticos, malware u otros sistemas que puedan provocar daños en nuestros sistemas o en los de terceros proveedores.</li>
          <li>Intentar acceder, modificar, manipular o utilizar las cuentas de otros usuarios o áreas restringidas de los sistemas informáticos de la Empresa.</li>
        </ul>
      </Reveal>

      {/* 5. PROPIEDAD INTELECTUAL */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">5. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
        <p className="text-gray-400 font-light leading-relaxed">
          Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a <strong>Francisco Antonio Guerrero Sánchez (Quark Techie)</strong> o a terceros que han autorizado su uso. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin la autorización expresa y por escrito del titular.
        </p>
      </Reveal>

      {/* 6. RESPONSABILIDADES */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">6. RESPONSABILIDADES Y LIMITACIONES</h3>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-3">
          <li><strong>Disponibilidad:</strong> La Empresa no garantiza la disponibilidad continua y permanente del sitio web, reservándose el derecho de suspender el acceso temporalmente para mantenimiento o actualizaciones.</li>
          <li><strong>Resultados de Consultoría:</strong> El contenido publicado en la web (artículos, blogs, guías) es de carácter orientativo. No constituye asesoramiento profesional vinculante. La Empresa no se hace responsable de las decisiones tomadas por el usuario basadas únicamente en la información de la web.</li>
          <li><strong>Enlaces Externos:</strong> El sitio web puede incluir enlaces a páginas de terceros. La Empresa no asume responsabilidad alguna por el contenido, políticas de privacidad o prácticas de dichas páginas externas.</li>
        </ul>
      </Reveal>

      {/* 7. MODIFICACIONES */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">7. MODIFICACIONES DE LOS TÉRMINOS</h3>
        <p className="text-gray-400 font-light leading-relaxed">
          Nos reservamos el derecho a modificar los presentes Términos y Condiciones en cualquier momento para adaptarlos a novedades legislativas, jurisprudenciales o prácticas del mercado. La versión actualizada estará siempre disponible en el sitio web y entrará en vigor desde el momento de su publicación.
        </p>
      </Reveal>

      {/* 8. LEY Y JURISDICCIÓN */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">8. LEY APLICABLE Y JURISDICCIÓN</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          La relación entre la Empresa y el Usuario se regirá por la normativa vigente en España y el marco legal de la Unión Europea.
        </p>
        <p className="text-gray-400 font-light leading-relaxed">
          Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso de este sitio web, ambas partes se someten expresamente a los Juzgados y Tribunales de Málaga, renunciando a cualquier otro fuero que pudiera corresponderles, sin perjuicio de los derechos irrenunciables de los consumidores internacionales según sus leyes locales.
        </p>
      </Reveal>

      {/* 9. DISPUTAS Y CONTACTO */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">9. RESOLUCIÓN DE DISPUTAS Y CONTACTO PARA RECLAMACIONES</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Fomentamos la resolución amistosa de cualquier discrepancia. En caso de duda, queja o reclamación relacionada con nuestro sitio web o nuestros servicios, el Usuario puede ponerse en contacto directo con nosotros a través de:
        </p>
        <p className="text-gray-400 font-light leading-relaxed">
          <strong>Email:</strong> <a href="mailto:hello@quark-techie.com" className="text-gray-400 hover:text-white">hello@quark-techie.com</a>
        </p>
      </Reveal>
    </div>
  );
};