import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import CommentForm from "./CommentForm";
import LoadComments from "./LoadComments";
import { baseUrl } from "../../redux/baseUrl";

const DishDetail = (props) => {
    return (
        <div>
            <Card>
                <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description} </CardText>
                    <CardText>{props.dish.price}/-</CardText>

                    <hr />
                    <LoadComments comments={props.Comments} commentIsLoading={props.commentIsLoading} />
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;