import React, { useContext, useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  useEffect(() => {
    console.log("Effect Running");

    return () => {
      console.log("Cleanup Function");
    };
  }, [enteredEmail]);
  /*
    useEffect(() => {
      console.log("use effect");
      var timerIdentifier = setTimeout(() => {
        console.log("Checking validation");
        setFormIsValid(
          enteredPassword.trim().length > 6 && enteredEmail.includes('@')
        );
      }, 500);
  
      return () => {
        console.log("cleanup function");
        clearTimeout(timerIdentifier);
      };
  
    }, [enteredEmail, enteredPassword]);
  */
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const authContext = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    authContext.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
          type="email"
          id="email"
          label="Email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
