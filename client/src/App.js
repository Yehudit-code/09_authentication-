import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getFood } from ('./services/food')
function App() {
  const [food, setFood] = useState([])
  useEffect(() => {
    getFood().then(data => setFood(data))
  }, [])
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
