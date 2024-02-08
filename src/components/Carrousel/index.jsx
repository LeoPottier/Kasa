import React, { useState } from 'react';
import left from '../../assets/arrow-left.png';
import right from '../../assets/arrow-right.png';
import './style.scss';

function Carrousel({ slides }) {

    document.title = "Fiche Logement - Kasa";

    const [currentImage, setCurrentImage] = useState(0);
    const length = slides.length;

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const showPreviousImage = () => {
		setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1); // on repart au dernier slide quand on est au premier
	};

    const showNextImage = () => {
		setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1); // on repart au premier slide quand on arrive au dernier
	};

    return (
        <section className='carrousel'>
            {slides.map((image, index) => (
                <div 
                    key={index} 
                    className={index === currentImage ? "slider active" : "slider"}>
                    {index === currentImage && (
                        <img src={image} alt="img-appartement" />
                    )}
                    {index === currentImage && length > 1 && (
                        <span className="slider__number">
                            {currentImage + 1}/{length}
                        </span>
                    )}
                </div>
            ))}
            <div>
                <img 
                    src={left} 
                    alt="left arrow" 
                    onClick={showPreviousImage}
                />
                <img 
                    src={right} 
                    alt='right arrow' 
                    onClick={showNextImage}
                />
            </div>
        </section>
    );
}

export default Carrousel;