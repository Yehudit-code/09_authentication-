import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getFood } from './services/food';
function App() {
  const [food, setFood] = useState([])
  //  useEffect(() => {
  //     getFood().then(data => setFood(data))
  //   }, [])
  useEffect(() => {
    getFood()
      .then(data => setFood(Array.isArray(data) ? data : []))
      .catch(err => {
        console.error('Failed to fetch food:', err);
        setFood([]);
      });
    },[])
    console.log(food);
  return (
    <div className="App">
      <div>
        {food.map((item, idx) => (
          <div key={idx}>{item.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
