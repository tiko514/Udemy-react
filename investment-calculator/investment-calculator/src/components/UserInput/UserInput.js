import { useState } from "react";
import Input from "../Input";
import classes from './UserInput.module.css';

const initialInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
};

const UserInput = (props) => {
    const [userInput, setUserInput] = useState(initialInput);
    const formSubmitHandler = (event) => {
        event.preventDefault();

        props.onCalculate(userInput);
    };

    const formResetHandler = () => {
        setUserInput(initialInput);
    };

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value
            };
        });
    }

    return (
        <form className={classes.form} onSubmit={formSubmitHandler} onReset={formResetHandler}>
            <div className={classes["input-group"]}>
                <Input LabelText="Current Savings ($)" InputId="current-savings" value={userInput['current-savings']}
                    onChange={(event) => inputChangeHandler(event.target.id, event.target.value)} />
                <Input LabelText="Yearly Savings ($)" InputId="yearly-contribution" value={userInput['yearly-contribution']}
                    onChange={(event) => inputChangeHandler(event.target.id, event.target.value)} />
            </div>
            <div className={classes["input-group"]}>
                <Input LabelText="Expected Interest (%, per year)" InputId="expected-return" value={userInput['expected-return']}
                    onChange={(event) => inputChangeHandler(event.target.id, event.target.value)} />
                <Input LabelText="Investment Duration (years)" InputId="duration" value={userInput['duration']}
                    onChange={(event) => inputChangeHandler(event.target.id, event.target.value)} />
            </div>
            <p className={classes.actions}>
                <button type="reset" className={classes.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>);
}

export default UserInput;