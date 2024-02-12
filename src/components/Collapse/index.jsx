import { useState } from "react";
import './style.scss';
import chevron from "../../assets/chevron.png"

const Collapse = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <div className="collapse">
            <div className="collapse-dropDown">
                <div className="collapse-title">
                    <h2>{title}</h2>
                </div>
                <div className="collapse-arrow-container" onClick={toggleCollapse}>
                    <img src={chevron} className={`collapse-arrow ${isOpen ? 'rotated' : ''}`} alt="fleche slide" />
                </div>
            </div>
            <div className={`collapse-content ${isOpen ? 'show' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Collapse;

