import React, { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
class Menu extends Component {
    state = {
        dishes: DISHES,
        selectecDish: null,
        modalOpen: false
    }

    onDishSelete = dish => {
        //console.log(dish);
        this.setState({
            selectecDish: dish,
            modalOpen: !this.state.modalOpen
        });
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
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
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secodary" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
        );
    }
}

export default Menu;