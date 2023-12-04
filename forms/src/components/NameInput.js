import React from "react";
import ValidatableInput from "./ValidatableInput";

const NameInput = props => {
    const ValidationHandler = (value) => {
        return value.trim() !== '';
    }

    return (
        <ValidatableInput
            Id='name'
            Label='Your Name'
            onValidate={ValidationHandler}
            ValidationText='Name Is Required'
            IsValid={props.IsValid}
        />
    );
}

export default NameInput;