import React, { Component } from "react";
import DISHES from "../../data/dishes";
import Comments from "../../data/Comments";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from "react-redux";
import { addComment,fetchDishes } from "../../redux/actionCreators";
import Loading from "./Loading.js";

const mapStateToProps = state => {
    //onsole.log("mapState to props", state);
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating,
            author, comment)),
        fetchDishes: () => dispatch(fetchDishes())
    }
}
class Menu extends Component {
    state = {

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

    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        document.title = "Menu";

        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            );
        }
        else {
            const menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem dish={item} key={item.id}
                        DishSelete={() => this.onDishSelete(item)}
                    />
                )
            });

            let dishDetail = null;
            if (this.state.selectecDish != null) {
                const comments = this.props.comments.filter(comment => {
                    return comment.dishId === this.state.selectecDish.id;
                });
                //console.log(comments);
                dishDetail = <DishDetail dish={this.state.selectecDish}
                    Comments={comments} addComment={this.props.addComment}
                />
            }
            return (
                <div className="container">
                    <div className="row">
                        <CardColumns>
                            {menu}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen} >
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);