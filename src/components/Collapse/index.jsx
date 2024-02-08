import { useState } from "react";
import './style.scss';
import chevron from "../../assets/chevron.png"

const Collapse = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <div className="divBar">
            <div className="divBar-dropDown">
                <div className="divBar-title">
                    <h2>{title}</h2>
                </div>
                <div className="divBar-arrow-container" onClick={toggleCollapse}>
                    <img src={chevron} className={`divBar-arrow ${isOpen ? 'rotated' : ''}`} alt="fleche slide" />
                </div>
            </div>
            <div className={`divBar-content ${isOpen ? 'show' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Collapse;

