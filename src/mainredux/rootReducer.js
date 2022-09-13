import { combineReducers } from 'redux'
import postReducer from "./AllPosts/postReducer";

const rootReducer = combineReducers({
    post: postReducer
})

export default rootReducer