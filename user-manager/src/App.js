import React, { useState } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const saveUserDataHandler = (userData) => {
    setUsersList((prevUsersList) => [userData, ...prevUsersList]);
  };

  const [usersList, setUsersList] = useState([]);

  return (
    <>
      <AddUser onSaveUserData={saveUserDataHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
