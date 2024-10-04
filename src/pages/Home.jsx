import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import seguridad from "../assets/seguridad.png";
import seccion1 from "../assets/seccion1.png";
import seccion2 from "../assets/seccion2.png";
import seccion3 from "../assets/seccion3.png";

const Home = () => {
    return (
        <div className="home">
            <div className="info-card">
                <h2>SEGURIDAD DE LA INFORMACIÓN</h2>
                <p>
                    La seguridad de la información es un conjunto de medidas y prácticas que buscan proteger la confidencialidad, integridad y disponibilidad de los datos.
                </p>
                <img className="central-image" src={seguridad} alt="Seguridad de la Información" />
            </div>
            <div className="image-gallery">
                <Link to="/seccion1" className="gallery-item">
                    <img src={seccion1} alt="Sección 1" />
                </Link>
                <Link to="/seccion2" className="gallery-item">
                    <img src={seccion2} alt="Sección 2" />
                </Link>
                <Link to="/seccion3" className="gallery-item">
                    <img src={seccion3} alt="Sección 3" />
                </Link>
            </div>
        </div>
    );
};

export default Home;
