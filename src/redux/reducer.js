

import { combineReducers } from "redux";
import * as actionType from './actionTypes';
import { IntitalContactForm } from "./forms";
import { createForms } from "react-redux-form";
import { connect } from "react-redux";


// const initailState = {
//     dishes: DISHES,
//     comments: Comments
// }

const dishReducer = (dishState = { isLoading: false, dishes: [], errMess: null }, action) => {
    switch (action.type) {
        case actionType.DISHES_LOADING:
            console.log("it is Calling");
            return {

                ...dishState,
                isLoading: true,
                dishes: [],
                errMess: null
            }
        case actionType.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                errMess: null,
                dishes: action.payload
            }
        case actionType.DISHES_FAILED:
            return {
                ...dishState,
                isLoading: false,
                errMess: action.payload,
                dishes: []
            }
        default:
            return dishState;
    }

}

const commentReducer = (commentState = { isLoading: true, comments: [] }, action) => {
    switch (action.type) {
        case actionType.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            };

        case actionType.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            };
        case actionType.ADD_COMMENT:
            let comment = action.payload;
            // comment.id = commentState.length;
            // comment.date = new Date().toDateString();

            // console.log(comment);


            return {
                ...comment,
                comments: commentState.comments.concat(comment)
            };
        default:
            return commentState;
    }


}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: IntitalContactForm
    })
})
