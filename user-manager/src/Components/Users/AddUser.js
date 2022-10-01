import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const userData = { username, age, id: Math.random().toString() };

    props.onSaveUserData(userData);

    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorModalConfirmHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorModalConfirmHandler}
        />
      )}
      <Card className={classes.input}>
        <form className="new-user" onSubmit={addUserHandler}>
          <label htmlFor="userName">Name</label>
          <input
            id="userName"
            type="text"
            onChange={usernameChangeHandler}
            value={username}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={age}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
