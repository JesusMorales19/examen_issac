import React from 'react';

// Array de leyes y conceptos con nombres y descripciones
const leyesConfidencialidad = [
  { name: "Ley General de Protección de Datos Personales de México", description: "Regula el tratamiento de los datos personales en el sector público, garantizando la protección de la información privada de los ciudadanos." },
  { name: "Ley de Propiedad Industrial", description: "Protege los derechos de propiedad intelectual y establece las normas sobre marcas, patentes y diseños industriales." },
  { name: "Ley Federal de Derechos de Autor", description: "Salvaguarda los derechos de los autores sobre sus creaciones literarias, artísticas y científicas." },
  { name: "Ley Federal de Datos Personales en Posesión de Particulares", description: "Establece los lineamientos para el manejo adecuado y protección de los datos personales en manos de empresas y particulares." },
  { name: "Código Penal Federal", description: "Contiene disposiciones relacionadas con delitos cibernéticos y sanciones por el uso indebido de la información." },
  { name: "Ley General de Transparencia y Acceso a la Información", description: "Garantiza el acceso a la información pública y establece las obligaciones de transparencia en las instituciones gubernamentales." },
  { name: "Criptografía Simétrica", description: "Método de cifrado donde el mismo secreto o clave se utiliza tanto para cifrar como para descifrar la información." },
  { name: "Criptografía Asimétrica", description: "Método de cifrado que utiliza una clave pública para cifrar datos y una clave privada diferente para descifrarlos." },
  { name: "Cifrado por Bloques y por Flujo", description: "Técnicas de cifrado en las que los datos se procesan en bloques de bits o como un flujo continuo de bits." },
  { name: "Criptoanálisis", description: "El arte de descifrar información encriptada sin conocer la clave secreta, comúnmente utilizado para romper sistemas de cifrado." }
];

function Seccion2() {
  return (
    <div>
      <h2>Confidencialidad de la Información</h2>
      <div className="card-container">
        {leyesConfidencialidad.map((ley, index) => (
          <div key={index} className="card">
            <h3>{ley.name}</h3>
            <p>{ley.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Seccion2;
