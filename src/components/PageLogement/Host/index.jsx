import React from "react";
import './style.scss'

function Host(props) {
    const { name, cover } = props;

    return (
        <div className="host">
            <div>
                <span className="host-name">{name}</span>
                <img className="host-cover" src={cover} alt="host" />
            </div>
        </div>
    );
}

export default Host;