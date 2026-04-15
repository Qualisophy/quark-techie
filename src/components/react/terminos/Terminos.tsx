import { Reveal } from "../shared/Reveal";

export const Terminos = () => {

  return (
    <div className="pt-40 pb-32 px-6 max-w-4xl mx-auto min-h-screen flex flex-col">
      {/* CABECERA DE LA PÁGINA */}
      <Reveal className="mb-12">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-white text-center">
          Términos de Uso.
        </h1>
        <h3 className="text-2xl font-semibold text-white mb-4">1. DATOS IDENTIFICATIVOS</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          En cumplimiento con el deber de información recogido en la normativa española, se reflejan a continuación los datos del titular del sitio web:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1 mb-4">
          <li>Denominación social: Qualisophy S.L.</li>
          <li>Nombre comercial: Quark Techie</li>
          <li>CIF: B16444960</li>
          <li>Domicilio social: Calle Esteban Salazar Chapela 11, 9º, CP 29004 Málaga, España</li>
          <li>Correo electrónico: <a href="mailto:hello@quark-techie.com" className="text-gray-400 hover:text-white">hello@quark-techie.com</a></li>
          <li>Teléfono: <a href="tel:+34951768789" className="text-gray-400 hover:text-white">+34 951 768 789</a></li>
        </ul>
      </Reveal>

      {/* 2. OBJETO */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">2. OBJETO</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          El presente sitio web tiene como finalidad ofrecer información sobre los servicios de consultoría IT prestados por Quark Techie, incluyendo:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed mb-4 space-y-1">
          <li>Desarrollo de software</li>
          <li>Servicios de QA (Quality Assurance)</li>
          <li>Soporte técnico</li>
        </ul>
        <p className="text-gray-400 font-light leading-relaxed">
          Asimismo, el sitio permite a los usuarios solicitar información o presupuestos personalizados a través de formularios de contacto.
        </p>
      </Reveal>

      {/* 3. CONDICIONES DE USO */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">3. CONDICIONES DE USO</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          El acceso y uso del sitio web atribuye la condición de usuario, implicando la aceptación plena y sin reservas de los presentes términos.
        </p>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          El usuario se compromete a:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1">
          <li>Hacer un uso adecuado del sitio web y de sus contenidos</li>
          <li>No realizar actividades ilícitas o contrarias a la buena fe</li>
          <li>No intentar acceder a áreas restringidas sin autorización</li>
          <li>No introducir virus o cualquier otro sistema que pueda dañar la web o a terceros</li>
        </ul>
      </Reveal>

      {/* 4. SERVICIOS Y CONTRATACIÓN */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">4. SERVICIOS Y CONTRATACIÓN</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Los servicios ofrecidos a través de la web tienen carácter informativo.
        </p>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          La contratación de servicios se realiza mediante:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed mb-4 space-y-1">
          <li>Solicitud de contacto por parte del usuario</li>
          <li>Análisis de necesidades por parte de Quark Techie</li>
          <li>Elaboración y envío de un presupuesto personalizado</li>
        </ul>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          El envío de un formulario no implica la formalización de ningún contrato ni obligación por parte de la empresa.
        </p>
        <p className="text-gray-400 font-light leading-relaxed">
          La relación contractual, en su caso, se formalizará posteriormente mediante acuerdo expreso entre las partes.
        </p>
      </Reveal>

      {/* 5. PROPIEDAD INTELECTUAL E INDUSTRIAL */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">5. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Todos los contenidos del sitio web (textos, diseño, código, logotipos, imágenes, etc.) son titularidad de Qualisophy S.L. o dispone de los derechos necesarios para su uso.
        </p>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Queda prohibida:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1">
          <li>La reproducción</li>
          <li>Distribución</li>
          <li>Comunicación pública</li>
          <li>Transformación</li>
        </ul>
        <p className="text-gray-400 font-light leading-relaxed mt-4">
          de dichos contenidos sin autorización expresa del titular.
        </p>
      </Reveal>

      {/* 6. RESPONSABILIDAD */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">6. RESPONSABILIDAD</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Quark Techie no se hace responsable de:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed mb-4 space-y-1">
          <li>Los errores u omisiones en los contenidos</li>
          <li>La falta de disponibilidad del sitio web</li>
          <li>La transmisión de virus o programas maliciosos, a pesar de haber adoptado todas las medidas tecnológicas necesarias</li>
        </ul>
        <p className="text-gray-400 font-light leading-relaxed">
          Asimismo, la información proporcionada en la web tiene carácter general y no constituye asesoramiento técnico vinculante.
        </p>
      </Reveal>

      {/* 7. PROTECCIÓN DE DATOS */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">7. PROTECCIÓN DE DATOS</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Los datos personales recogidos a través de los formularios de contacto serán tratados por Qualisophy S.L. con la finalidad de:
        </p>
        <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed mb-4 space-y-1">
          <li>Atender consultas</li>
          <li>Gestionar solicitudes de información o presupuestos</li>
        </ul>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          <strong>Base legal:</strong> consentimiento del interesado.
        </p>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Los datos no serán cedidos a terceros, salvo obligación legal.
        </p>
        <p className="text-gray-400 font-light leading-relaxed">
          El usuario podrá ejercer sus derechos de acceso, rectificación, supresión y demás derechos reconocidos por la normativa vigente mediante solicitud al correo electrónico: hello@quark-techie.com
        </p>
      </Reveal>

      {/* 8. ENLACES A TERCEROS */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">8. ENLACES A TERCEROS</h3>
        <p className="text-gray-400 font-light leading-relaxed">
          En caso de que el sitio web contenga enlaces a sitios de terceros, Qualisophy S.L. no se responsabiliza de los contenidos ni de las políticas de privacidad de dichos sitios externos.
        </p>
      </Reveal>

      {/* 9. MODIFICACIONES */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">9. MODIFICACIONES</h3>
        <p className="text-gray-400 font-light leading-relaxed">
          Qualisophy S.L. se reserva el derecho a modificar en cualquier momento los presentes términos, siendo debidamente publicados en el sitio web.
        </p>
      </Reveal>

      {/* 10. LEGISLACIÓN APLICABLE Y JURISDICCIÓN */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">10. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          La relación entre el usuario y Qualisophy S.L. se regirá por la legislación española vigente.
        </p>
        <p className="text-gray-400 font-light leading-relaxed">
          Para la resolución de cualquier conflicto que pudiera surgir, las partes se someterán a los juzgados y tribunales de Málaga, salvo que la normativa aplicable disponga otra cosa.
        </p>
      </Reveal>

      {/* 11. CONTACTO */}
      <Reveal className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">11. CONTACTO</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-4">
          Para cualquier duda relativa a estos términos, el usuario puede contactar a través de:
        </p>
        <div className="text-gray-400 font-light leading-relaxed space-y-1">
          <p>Email: <a href="mailto:hello@quark-techie.com" className="text-gray-400 hover:text-white">hello@quark-techie.com</a></p>
          <p>Teléfono: <a href="tel:+34951768789" className="text-gray-400 hover:text-white">+34 951 768 789</a></p>
        </div>
      </Reveal>
    </div>
  );
};