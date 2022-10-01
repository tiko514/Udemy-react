import { useState } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const saveUserDataHandler = (userData) => {
    setUsersList((prevUsersList) => [userData, ...prevUsersList]);
  };

  const [usersList, setUsersList] = useState([]);

  return (
    <div className="App">
      <AddUser onSaveUserData={saveUserDataHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
