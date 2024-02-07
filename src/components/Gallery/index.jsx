import './style.scss'
import React, { useState, useEffect } from 'react';

function Gallery() {
    const [logements, setLogements] = useState([]);
  
    useEffect(() => {
      const fetchLogements = async () => {
        try {
          const response = await fetch('/../../../logement.json');
          const data = await response.json();
          setLogements(data);
        } catch (error) {
          console.error('Erreur lors du chargement des logements:', error);
        }
      };
  
      fetchLogements();
    }, []); // Le tableau vide signifie que le code à l'intérieur de useEffect s'exécutera une fois après le montage initial du composant.
  
    return (
      <div className="gallery">
        {logements.map((logement) => (
          <article key={logement.id} className="gallery-card">
            <img src={logement.cover} alt="img logement"/>
            <p>{logement.title}</p>
          </article>
        ))}
      </div>
    );
}

export default Gallery