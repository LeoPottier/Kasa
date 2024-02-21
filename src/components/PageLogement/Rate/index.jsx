import inactive from '../../../assets/rateInactive.png'
import active from '../../../assets/rateActive.png'

function Rate({ note }) {
    
    const activeStars = Math.min(note, 5); // Nombre d'étoiles actives, limité à 5

    // Créer un tableau d'éléments JSX pour les étoiles actives
    const activeStarsArray = Array(activeStars).fill().map((_, index) => (
        <img key={index} src={active} alt="rate active" />
    ));

    // Créer un tableau d'éléments JSX pour les étoiles inactives
    const inactiveStarsArray = Array(5 - activeStars).fill().map((_, index) => (
        <img key={activeStars + index} src={inactive} alt="rate inactive" />
    ));

    // Concaténer les tableaux d'étoiles actives et inactives
    const stars = [...activeStarsArray, ...inactiveStarsArray];

    return (
        <div className="rating">
            {stars}
        </div>
    );
}

export default Rate;