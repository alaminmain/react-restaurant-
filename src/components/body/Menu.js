import React, { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectecDish: null
    }

    onDishSelete = dish => {
        console.log(dish);
        this.setState({ selectecDish: dish });
    }

    render() {

        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id}
                    DishSelete={() => this.onDishSelete(item)}
                />
            )
        });

        let dishDetail = null;
        if (this.state.selectecDish != null) {
            dishDetail = <DishDetail dish={this.state.selectecDish} />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;