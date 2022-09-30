import React from "react";
import { useState } from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button'

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        const userData = { username, age };

        props.onSaveUserData(userData);

        setUsername('');
        setAge('');
    };

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form className="new-user" onSubmit={addUserHandler}>
                <label htmlFor="userName">Name</label>
                <input id="userName" type="text" onChange={usernameChangeHandler} value={username} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} value={age} />
                <Button type="submit">Add User</Button>
            </form>
        </Card >
    )
};

export default AddUser;