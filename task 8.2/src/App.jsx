import { useState } from 'react'
import reactLogo from './assets/react.svg'
import data from './Data'
import './card.css'
import './App.css'

function App() {
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleToppingClick = (topping) => {
    if (selectedToppings.length >= 5) {
      alert('You have reached the maximum number of toppings!');
    } else if (selectedToppings.includes(topping)) {
      alert('This topping is already selected!');
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };


  return (
    <div className="App">
      <div className='card'>
      {data.map((turtle) => (
        <div key={turtle.name}>
          <h2>{turtle.name}</h2>
          <img className='img' src={turtle.img} alt={turtle.name} />
          <p>Toppings:</p>
          <ul>
            {turtle.pizzaToppings.map((topping) => (
              <li key={topping.name}>
                <button onClick={() => handleToppingClick(topping)}>{topping.name}</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
      <h2>Selected Toppings</h2>
      <ul>
        {selectedToppings.map((topping) => (
          <li key={topping.name}>{topping.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
