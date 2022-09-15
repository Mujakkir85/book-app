import React from 'react';
import {useState} from "react";
import {TextField, Button, Container, Stack, Typography, Paper} from "@mui/material";
import {fetchPosts} from "../../mainredux/AllPosts/postAction";
import {addPost} from "../../mainredux/AddPost/addAction";
import {connect} from "react-redux";
import Box from "@mui/material/Box";

const AddBlog = ({addData, addPost}) => {
    //const [blogdata, setBlogdata] = useState([]);
    let authorName, bookName, description

    const handleSubmit=(event)=>{
         event.preventDefault();
        let authorName
        let bookName
        let description
         const newdata = {
             authorName: event.target.authorName.value,
             bookName: event.target.bookName.value,
             description: event.target.description.value,
         }
         //setBlogdata([...blogdata, newdata])
         addPost(newdata)

         event.target.authorName.value = '';
         event.target.bookName.value = '';
         event.target.description.value = '';
    }
    console.log('store data', addData)
    //console.log(blogdata)

    return (
        <Container sx={{mt: '20px'}}>

            <form  onSubmit={handleSubmit} >
                <Stack sx={{width: '50%', mx: 'auto'}} spacing={4} >
                <Typography variant='h4' sx={{mx:'auto'}} >ADD A NEW BLOG</Typography>
                <TextField
                    id="outlined-basic"
                    label="Author_Name"
                    variant="outlined"
                    required fullWidth
                    name='authorName'
                />
                <TextField
                    id="outlined-basic"
                    label="Book_Name"
                    variant="outlined"
                    required fullWidth
                    name='bookName'
                />
                <TextField
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    required fullWidth
                    name='description'
                    multiline rows={3}
                />
                <Button type='submit' fullWidth variant="contained">Submit</Button>
                </Stack>
            </form>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 300,
                        height: 300,
                    },
                }}
            >
                {addData?.map((data)=>
                <Paper elevation={3}>
                  <Typography>  {data.authorName} </Typography>
                </Paper>
                    )}
            </Box>
        </Container>
    );
};


const mapStateToProps = state =>{
    return{
        addData : state.addPost.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addPost: (data) => dispatch(addPost(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddBlog);
