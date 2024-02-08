import './style.scss'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logement from '../../data/logement.json'

function Gallery() {
  const [logements] = useState(Logement); // Utiliser les données JSON comme état initial

    return (
      <div className="gallery">
        {logements.map((logement) => (
          <article key={logement.id} className="gallery-card">
            <Link to={`/logement/${logement.id}`}>
              <img src={logement.cover} alt="img logement"/>
              <p>{logement.title}</p>
            </Link>
          </article>
        ))}
      </div>
    );
}

export default Gallery