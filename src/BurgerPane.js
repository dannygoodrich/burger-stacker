import React from 'react';
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'


function BurgerPane(props) {
    return (
        <div>
            <BurgerStack stack={props.stack} />
            <ClearBurger action={props.action} />
        </div>
    )
}





export default BurgerPane;