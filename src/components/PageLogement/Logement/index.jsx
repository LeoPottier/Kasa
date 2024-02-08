import { useParams } from "react-router-dom";
import Carrousel from "../Carrousel/Carrousel";
import DataFicheLogement from "../../../data/logement.json"


function FicheLogement () {

    const { id } = useParams();

    const data = DataFicheLogement.find((logement) => logement.id === id);

if (!data) {
    return <div>Logement non trouvé</div>; // ou rediriger vers une page d'erreur
}

    return (
        <section>
            <div className="ficheLogement">
                <Carrousel slides={data.pictures} />
            </div>
        </section>
    )
}

export default FicheLogement