import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
}
    from "./postTypes";
import axios from "axios";


export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest())
        axios
            .get('data.json')
            .then(response => {
                // response.data is the users
                const posts = response.data.books
                //console.log(posts)
                dispatch(fetchPostsSuccess(posts))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchPostsFailure(error.message))
            })
    }
}


export const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}

export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPostsFailure = (error) => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}