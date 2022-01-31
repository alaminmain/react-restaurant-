
import Comments from "../data/Comments";
import { combineReducers } from "redux";
import * as actionType from './actionTypes';
import { IntitalContactForm } from "./forms";
import { createForms } from "react-redux-form";


// const initailState = {
//     dishes: DISHES,
//     comments: Comments
// }

const dishReducer = (dishState = {isLoading:false,dishes: [] }, action) => {
    switch (action.type) {
        case actionType.DISHES_LOADING:
            console.log("it is Calling");    
        return{

                ...dishState,
                isLoading:true,
                dishes:[]
            }
        case actionType.LOAD_DISHES:
            return{
                ...dishState,
                isLoading:false,
                dishes:action.payload
            }
        default:
            return dishState;
    }

}

const commentReducer = (commentState = Comments, action) => {
    switch (action.type) {
        case actionType.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();

           // console.log(comment);


            return commentState.concat(comment)
        default:
            return commentState;
    }


}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback:IntitalContactForm
    })
})
