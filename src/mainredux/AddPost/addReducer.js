import {ADD_POST} from "./addTypes";

const initialState = {
    posts: []
}

const postReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_POST:
            return{
                ...state,
                posts: [action.payload, ...state.posts]
            }
        default: return state
    }
}

export default postReducer