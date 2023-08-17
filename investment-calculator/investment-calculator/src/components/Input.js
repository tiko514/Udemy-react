import React from "react";

function Input(props) {
    return (
        <p>
            <label htmlFor={props.InputId}>{props.LabelText}</label>
            <input type="number" id={props.InputId} value={props.value} onChange={props.onChange} />
        </p>
    );
}

export default Input;