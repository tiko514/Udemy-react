import { useState } from "react";
import React from "react";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";

const SimpleInput = (props) => {
  // const [formIsValid, setFormIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  const formIsValid = nameIsValid && emailIsValid;

  const onNameValidate = (isValid) => {
    setNameIsValid(isValid);
  };

  const onEmailValidate = (isValid) => {
    setEmailIsValid(isValid);
  };

  console.log(`Name is valid: ${nameIsValid}`);
  console.log(`Email is valid: ${emailIsValid}`);
  console.log(`Form is valid: ${formIsValid}`);

  const formSubmitHandler = event => {
    event.preventDefault();

    console.log(`Name is valid: ${nameIsValid}`);
    console.log(`Email is valid: ${emailIsValid}`);
    console.log(`Form is valid: ${formIsValid}`);

    // setName('');
    // setIsTouched(false);
  }

  // console.log(formIsValid);

  return (
    <form onSubmit={formSubmitHandler}>
      <NameInput IsValid={onNameValidate} />
      <EmailInput IsValid={onEmailValidate} />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form >
  );
};

export default SimpleInput;