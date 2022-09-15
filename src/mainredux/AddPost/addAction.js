import {ADD_POST} from "./addTypes";

export const addPost = (data) =>{
    return{
        type: ADD_POST,
        payload: data
    }
}