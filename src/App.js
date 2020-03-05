import React, {useState} from 'react';
import './App.css';
import Ingredients from './Ingredients'
import BurgerPane from './BurgerPane'




function App(props) {
  const [ingredient, setIngredient] = useState([{name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}])
  return (
    <div>
      <ul>
        <li>
          <Ingredients />
        </li>
      </ul>
    </div>
    
  );
}

export default App;
