import React from 'react';


// Array of cyber attack objects with names and descriptions
const ataquesCiberneticos = [
  { name: "DDoS", description: "Un ataque que intenta hacer que un servicio en línea no esté disponible al sobrecargarlo con tráfico." },
  { name: "Ordenador Zombie", description: "Una computadora controlada por un atacante sin el conocimiento del propietario, a menudo utilizada para realizar ataques DDoS." },
  { name: "Ciberdelincuente", description: "Una persona que comete crímenes informáticos, como el robo de datos o el fraude." },
  { name: "Botmaster", description: "El operador de una botnet, responsable de controlar los dispositivos infectados." },
  { name: "Botnet", description: "Una red de computadoras infectadas que son controladas por un atacante para llevar a cabo ataques coordinados." },
  { name: "Ransomware", description: "Un tipo de malware que cifra los datos de un sistema y exige un rescate para restaurar el acceso." },
  { name: "Disclaimer", description: "Una declaración que limita la responsabilidad en caso de daños causados por el uso de un software o servicio." },
  { name: "The Morris Worm", description: "Uno de los primeros gusanos de computadora que se propagó por Internet, causando interrupciones masivas." },
  { name: "Ciberwarfare", description: "El uso de ataques cibernéticos para llevar a cabo acciones hostiles en un conflicto entre naciones." },
  { name: "Stuxnet", description: "Un malware diseñado para atacar sistemas industriales, famoso por su ataque a las instalaciones nucleares de Irán." },
  { name: "Moonlight Maze", description: "Un ataque cibernético dirigido a sistemas del gobierno de EE. UU. en la década de 1990." },
  { name: "Operation Aurora", description: "Un ataque cibernético que se centró en Google y otras empresas en 2009, atribuido a actores estatales." },
  { name: "Freeze it into submission", description: "Un tipo de ataque que utiliza técnicas de sobrecarga para detener un sistema en su lugar." },
  { name: "WannaCry", description: "Un ataque de ransomware que afectó a miles de organizaciones en todo el mundo en 2017, explotando una vulnerabilidad de Windows." },
  { name: "Petya", description: "Un ataque de ransomware que se disfraza de actualización de software, afectando a grandes empresas en 2017." },
  { name: "Equifax (ataque)", description: "Una violación de datos en 2017 que expuso información personal de millones de personas." },
  { name: "Cam4 (ataque)", description: "Un ataque cibernético que comprometió la información de los usuarios de la plataforma Cam4." }
];

function Seccion1() {
  return (
    <div>
      <h2>Ataques Cibernéticos</h2>
      <div className="card-container">
        {ataquesCiberneticos.map((ataque, index) => (
          <div key={index} className="card">
            <h3>{ataque.name}</h3>
            <p>{ataque.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Seccion1;
