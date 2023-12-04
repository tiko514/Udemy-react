import React, { useState } from "react";
import ValidatableInput from "./ValidatableInput";

const EmailInput = props => {
    const [isEmpty, setIsEmpty] = useState(false);

    const ValidationHandler = (value) => {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        setIsEmpty(value.trim() === '');

        return !isEmpty && value.match(emailRegex);
    };

    const validationText = isEmpty ? 'Email is required' : 'Invalid email format';

    return (
        <ValidatableInput Id='email'
            Label='Your Email'
            onValidate={ValidationHandler}
            ValidationText={validationText}
            IsValid={props.IsValid} />
    );
}

export default EmailInput;