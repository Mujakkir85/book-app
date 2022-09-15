import { combineReducers } from 'redux'
import postReducer from "./AllPosts/postReducer";
import addReducer from "./AddPost/addReducer"

const rootReducer = combineReducers({
    post: postReducer,
    addPost: addReducer
})

export default rootReducer