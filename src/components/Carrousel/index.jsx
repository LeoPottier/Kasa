import React from 'react';
import left from '../../assets/arrow-left.png';
import right from '../../assets/arrow-right.png';
import ImageData from '../../data/logement.json';
import './style.scss'; // Assurez-vous d'importer vos styles CSS/SCSS correctement

function Carrousel() {
    document.title = "Logement - Kasa";

    return (
        <div className='carrousel'>
            {ImageData.map((data) => (
                <div key={data.id}>
                    <img src={data.pictures} alt='' />
                    <img src={left} alt="left arrow"></img>
                    <img src={right} alt='right arrow'></img>
                </div>
            ))}
        </div>
    );
}

export default Carrousel;

    
//     return (
//             <div className="carrousel">
//                 <img src="" className="carrousel-photo" alt=""></img> 
                
//             </div>
//     )
// }
