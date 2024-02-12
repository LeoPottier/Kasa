import { useParams } from "react-router-dom";
import Carrousel from "../../components/PageLogement/Carrousel";
import Tags from "../../components/PageLogement/Tag";
import Host from "../../components/PageLogement/Host";
import DataFicheLogement from "../../data/logement.json"
import './style.scss'
import Collapse from "../../components/Collapse";


function FicheLogement () {

    const { id } = useParams();

    const data = DataFicheLogement.find((logement) => logement.id === id);

    if (!data) {
        return <div>Logement non trouvé</div>; // ou rediriger vers une page d'erreur
    }
    
    document.title = data.title + 'Kasa';

    return (
        <section className="fiche-logement">
            <Carrousel 
                slides={data.pictures} 
            />
            <div className="fiche-logement-location">
                <div className="fiche-logement-info">
                    <span className="fiche-logement-info--title">{data.title}</span>
                    <span className="fiche-logement-info--location">{data.location}</span>
                </div>
                <div className="fiche-logement-host">
                    <Host 
                        name={data.host.name} 
                        cover={data.host.picture} 
                    />
                </div>
                <div className="fiche-logement-tags">
                    <Tags 
                        tags={data.tags} 
                    />
                </div>
            </div>
            <div className="fiche-logement-collapse">
                <div className="fiche-logement-collapse-description">
                    <Collapse 
                        key={data.id} 
                        title="Description" 
                        content={data.description}
                    />
                </div>
                <div className="fiche-logement-collapse-equipement">
                    <Collapse 
                        key={data.id} 
                        title="Equipements" 
                        content={data.equipments}
                    />
                </div>
            </div>

        </section>
    )
}

export default FicheLogement