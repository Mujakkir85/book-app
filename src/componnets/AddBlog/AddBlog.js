import React from 'react';
import {useState} from "react";
import {TextField, Button, Container, Stack, Typography, Paper, styled} from "@mui/material";
import {fetchPosts} from "../../mainredux/AllPosts/postAction";
import {addPost} from "../../mainredux/AddPost/addAction";
import {connect} from "react-redux";
import Box from "@mui/material/Box";
import Image from 'mui-image'
const img = 'https://c4.wallpaperflare.com/wallpaper/782/869/293/abstraction-texture-colorful-abstract-wallpaper-preview.jpg'
const img2 = "https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_960_720.jpg"
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
                        width: 320,
                        height: 420,
                    },
                    mt: '50px',
                    justifyContent: 'center'
                }}
                xs={{m: 10}}
            >
                {addData?.map((data)=>
                <Paper elevation={3} >
                    <Stack justifyContent="center"
                           alignItems="center"
                           spacing={1}
                           mx = {'5px'}
                    >
                  <Typography mt={2} sx={{typography: { xs: 'body1', sm: 'h6'}}} >Author Name:  {data.authorName} </Typography>
                  <Typography sx={{typography: {xs: 'body1', sm: 'h6'}}} >Book Name:  {data.bookName} </Typography>
                  <Typography >Book Description:  {data.description} </Typography>
                    {/*<Box*/}
                    {/*    component="img"*/}
                    {/*    sx={{*/}
                    {/*         // height: 275,*/}
                    {/*         // width: 250,*/}
                    {/*        width: '60%',*/}
                    {/*        height: 'auto',*/}
                    {/*       // objectFit: 'cover'*/}
                    {/*    }}*/}
                    {/*     alt="The house from the offer."*/}
                    {/*     src="https://c4.wallpaperflare.com/wallpaper/782/869/293/abstraction-texture-colorful-abstract-wallpaper-preview.jpg"*/}
                    {/*      //src="https://www.oberlo.com/media/1603897577-image22-1.jpg?w=1824&fit=max"*/}
                    {/*// />*/}
                    {/*    />*/}
                        <Image
                            src={img}
                        />


                    </Stack>

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
