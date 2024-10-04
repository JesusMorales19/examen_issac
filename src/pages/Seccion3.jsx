import React from 'react';

// Array de principios de seguridad con nombres y descripciones
const principiosSeguridad = [
  { name: "Accesibilidad", description: "Garantizar que la información esté disponible y accesible cuando sea necesaria para quienes tienen la autorización adecuada." },
  { name: "Confidencialidad", description: "Asegurar que la información esté protegida contra el acceso no autorizado y solo las personas autorizadas puedan acceder a ella." },
  { name: "Disponibilidad", description: "Asegurar que los sistemas, redes y datos estén operativos y accesibles para los usuarios autorizados en el momento adecuado." },
  { name: "Autenticación", description: "Verificación de la identidad de un usuario, dispositivo o sistema antes de permitir el acceso a los recursos o datos." },
  { name: "Integridad", description: "Asegurar que la información no ha sido alterada de forma no autorizada, manteniéndose precisa y completa." },
  { name: "Control de Acceso", description: "Restringir el acceso a sistemas y datos solo a aquellos que tienen los permisos necesarios para acceder a ellos." }
];

function Seccion3() {
  return (
    <div>
      <h2>Principios de Seguridad de la Información</h2>
      <div className="card-container">
        {principiosSeguridad.map((principio, index) => (
          <div key={index} className="card">
            <h3>{principio.name}</h3>
            <p>{principio.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Seccion3;
