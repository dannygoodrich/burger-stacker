import React from 'react';

function Ingredient(props) {
      return (
        <div backgroundcolor={props.color}>
          {props.ingredient}
        </div>

      )

} 
    


export default Ingredient;