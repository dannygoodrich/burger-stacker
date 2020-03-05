import React, {useState} from 'react';

function Ingredients(props) {
  // let ingredients = [
  //       {name: 'Kaiser Bun', color: 'saddlebrown'},
  //       {name: 'Sesame Bun', color: 'sandybrown'},
  //       {name: 'Gluten Free Bun', color: 'peru'},
  //       {name: 'Lettuce Wrap', color: 'olivedrab'},
  //       {name: 'Beef Patty', color: '#3F250B'},
  //       {name: 'Soy Patty', color: '#3F250B'},
  //       {name: 'Black Bean Patty', color: '#3F250B'},
  //       {name: 'Chicken Patty', color: 'burlywood'},
  //       {name: 'Lettuce', color: 'lawngreen'},
  //       {name: 'Tomato', color: 'tomato'},
  //       {name: 'Bacon', color: 'maroon'},
  //       {name: 'Onion', color: 'lightyellow'}
  //     ];
      return (
        <div>
          <ul>
            <li>{props.ingredients.map((ingredient, i) => <div key={i}>{ingredient.name}</div>)}}</li>
          </ul>
        </div>

      )

} 
    


export default Ingredients;