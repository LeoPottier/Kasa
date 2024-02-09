import React, { useState } from 'react';
import left from '../../../assets/arrow-left.png';
import right from '../../../assets/arrow-right.png';
import './style.scss';

function Carrousel({ slides }) {
    document.title = "Fiche Logement - Kasa";
  
    const [currentImage, setCurrentImage] = useState(0);
    const length = slides.length;
  
    const showPreviousImage = () => setCurrentImage((currentImage - 1 + length) % length);
    const showNextImage = () => setCurrentImage((currentImage + 1) % length);
  
    if (!Array.isArray(slides) || slides.length === 0) return null;
  
    return (
      <section className='carrousel'>
        {slides.map((image, index) => (
          <div key={index} className={index === currentImage ? "carrousel-slider active" : "carrousel-slider"}>
            {index === currentImage && (
              <>
                <img src={image} className="carrousel-cover" alt="img-appartement" />
                {length > 1 && <span className="carrousel-number">{currentImage + 1}/{length}</span>}
              </>
            )}
          </div>
        ))}
        {length > 1 && (
          <div className='carroussel-arrow'>
            <img src={left} alt="left arrow" className="left-arrow" onClick={showPreviousImage} />
            <img src={right} alt='right arrow' className="right-arrow" onClick={showNextImage} />
          </div>
        )}
      </section>
    );
}
  
export default Carrousel;