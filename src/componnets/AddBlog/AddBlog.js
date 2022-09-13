import React from 'react';
import {useState} from "react";
import {TextField, Button, Container, Stack, Typography} from "@mui/material";

const AddBlog = () => {
    const [blogdata, setBlogdata] = useState([]);
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
         setBlogdata([...blogdata, newdata]);
        authorName = '';
        bookName = '';
        description = '';
         console.log(authorName, bookName, description)
    }


    console.log(blogdata)

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
        </Container>
    );
};

export default AddBlog;
