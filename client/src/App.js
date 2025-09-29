import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getFood } from './services/food';
import { login, logout } from './services/auth';

function App() {
  const [food, setFood] = useState([])
  const handleLogin = () => {
    login("admin", "1234")
  }
  const getAllFood = () => {
    console.log("App useEffect called");
    getFood()
      .then(data => setFood(Array.isArray(data) ? data : []))
      .catch(err => {
        console.error('Failed to fetch food:', err);
        setFood("");
      });
  }

  return (
    <div className="App">
      <div>
        <button onClick={getAllFood}>Get Food</button>
        <button onClick={handleLogin}>login</button>
        <button onClick={logout}>logout</button>
      </div>
    </div>
  );
}

export default App;
