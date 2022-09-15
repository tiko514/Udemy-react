import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  const [isValid, setIsValid] = useState(true);

  const validationColor = isValid ? "black" : "red";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: validationColor }}>Course Goal</label>
        <input
          style={{
            borderColor: validationColor,
            background: isValid ? "transparent" : "salmon",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
