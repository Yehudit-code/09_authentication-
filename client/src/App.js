import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getFood, setFoodToken } from './services/food';
import { login, logout } from './services/auth';

function App() {
  const [food, setFood] = useState([])
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await login("admin", "1234");
      if (res.token) {
        // Set token in axios/fetch service
        setFoodToken(res.token);
        setLoggedIn(true);
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const getAllFood = async () => {
    console.log("Fetching foods...");
    try {
      const data = await getFood();
      setFood(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch food:", err);
      setFood([]);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setFoodToken(token);  // set token for all future requests
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    await logout();
    setLoggedIn(false);
    setFood([]);
  };

  return (
    <div className="App">
      <h1>Food App</h1>

      {!loggedIn ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <>
          <button onClick={getAllFood}>Get Food</button>
          <button onClick={handleLogout}>Logout</button>

          {food.length > 0 ? (
            <ul>
              {food.map((f, idx) => (
                <li key={idx}>{f.name}</li>
              ))}
            </ul>
          ) : (
            <p>No food available</p>
          )}
        </>
      )}
    </div>
  );
}

export default App;
