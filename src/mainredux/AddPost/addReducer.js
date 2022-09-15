import {ADD_POST} from "./addTypes";

const initialState = {
    posts: []
}

const addReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_POST:
            return{
                ...state,
                posts: [action.payload, ...state.posts,]
                //posts: [...state.posts, action.payload]
            }
        default: return state
    }
}

export default addReducer