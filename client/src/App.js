import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getFood, getFood2 } from './services/food';
function App() {
  const [food, setFood] = useState([])

  const getAllFood = () => {
    console.log("App useEffect called");
    getFood()
      .then(data => setFood(Array.isArray(data) ? data : []))
      .catch(err => {
        console.error('Failed to fetch food:', err);
        setFood("");
      });
  }
  // useEffect(() => {
  //   console.log("App useEffect called2");
  //   getFood2()
  //     .then(data => setFood2(data) ? data : "aaa")
  //     .catch(err => {
  //       console.error('Failed to fetch food2:', err);
  //       setFood2([]);
  //     });
  // }, [])
  return (
    <div className="App">
      <div>
        <button onClick={getAllFood}>Get Food</button>
      </div>
    </div>
  );
}

export default App;
