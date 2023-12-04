import React, { useState } from "react";

const ValidatableInput = (props) => {

    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = props.onValidate(value);
    const inputIsInvalid = isTouched && !valueIsValid;

    const inputChangeHandler = event => {
        setValue(event.target.value);
    }

    const inputBlurHandler = event => {
        setIsTouched(true);
    }

    props.IsValid(!inputIsInvalid);

    return (
        <div>
            <div className={`form-control ${inputIsInvalid ? "invalid" : ""} `}>
                <label htmlFor={props.Id}>{props.Label}</label>
                <input
                    id={props.Id}
                    type='text'
                    value={value}
                    onChange={inputChangeHandler}
                    onBlur={inputBlurHandler} />
            </div>
            {inputIsInvalid && <p className="error-text">{props.ValidationText}</p>}
        </div>
    );
}

export default ValidatableInput;