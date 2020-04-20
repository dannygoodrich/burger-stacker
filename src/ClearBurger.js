import React from 'react';


function ClearBurger(props) {

    return (
        <div>
            <button onClick={(e) => props.action(e)}>
                Clear Stack 🍔
            </button>
        </div>
    )
}


export default ClearBurger;