import { useParams, Navigate } from "react-router-dom";
import Carrousel from "../../components/PageLogement/Carrousel";
import Tags from "../../components/PageLogement/Tag";
import Host from "../../components/PageLogement/Host";
import Rate from "../../components/PageLogement/Rate";
import DataFicheLogement from "../../data/logement.json";
import './style.scss';
import Collapse from "../../components/Collapse";


function FicheLogement () {

    const { id } = useParams();

    const data = DataFicheLogement.find((logement) => logement.id === id);

    if (!data) {
        return <Navigate to="/*" />; // ou rediriger vers une page d'erreur
    }
    
    document.title = data.title + 'Kasa';

    const equipments = data && data.equipments;

    // Variable pour mettre les equipements dans une liste et pouvoir les rangers en colonne
    const equip = data && equipments.map((item, index) => (
			<li key={index}>
				{item}
			</li>
	));

    return (
        <section className="fiche-logement">
            <Carrousel 
                slides={data.pictures} 
            />
            <div className="fiche-logement-location">
                <div className="info-tag">
                    <div className="fiche-logement-info">
                        <span className="fiche-logement-info--title">{data.title}</span>
                        <span className="fiche-logement-info--location">{data.location}</span>
                    </div>
                    <div className="fiche-logement-tags">
                        <Tags 
                            tags={data.tags} 
                        />
                    </div>
                </div>
                <div className="host-rate">
                    <Host 
                        name={data.host.name} 
                        cover={data.host.picture} 
                    />
                    <div className="fiche-logement-rating">
                        <Rate note={data.rating}/>
                    </div>
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
                        title="Equipements" 
                        content={equip}
                    />
                </div>
            </div>
        </section>
    )
}

export default FicheLogement