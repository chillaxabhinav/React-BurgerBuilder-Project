import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import burger from '../../components/Burger/Burger';

export class BurgerBuilder extends Component {
    state = {

    }

    render() {
        return (
            <Aux>
                <Burger />
                <div>Build controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;
