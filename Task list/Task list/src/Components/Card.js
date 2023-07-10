import React from "react";

function Card(props) {
    return (
        <li className="concept">
            <img src={props.Image} alt={props.Title} />
            <h2>{props.Title}</h2>
            <p>{props.Description}</p>
        </li>
    );
}

export default Card;