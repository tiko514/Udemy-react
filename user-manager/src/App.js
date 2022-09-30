import './App.css';
import AddUser from './Components/Users/AddUser';

function App() {
  const saveUserDataHandler = (userData) => {
    console.log(userData);
  };

  return (
    <div className="App">
      <AddUser onSaveUserData={saveUserDataHandler} />
    </div>
  );
}

export default App;
