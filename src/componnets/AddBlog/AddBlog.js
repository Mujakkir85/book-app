import React from 'react';
import {TextField, Button, Container, Stack, Typography} from "@mui/material";

const AddBlog = () => {
    const [blogdata, setBlogdata] = useState({
        authorName: '', bookName: '', description: ''
    });

    let authorName, bookName, description
    let name, value;
    const handleinput = (e) =>{
        name = e.target.name;
        value = e.target.value;
    }

    // const handleSubmit=(event)=>{
    //      event.preventDefault();
    //      authorName = event.target.name.value;
    //      bookName = event.target.bookName.value;
    //      description = event.target.description.value;
    //      console.log(authorName, bookName, description)
    //
    //      event.target.name.value = '';
    //      event.target.bookName.value = '';
    //      event.target.description.value = '';
    // }


    return (
        <Container sx={{mt: '20px'}}>

            <form onSubmit={handleSubmit} >
                <Stack sx={{width: '50%', mx: 'auto'}} spacing={4} >
                <Typography variant='h4' sx={{mx:'auto'}} >ADD A NEW BLOG</Typography>
                <TextField
                    id="outlined-basic"
                    label="Author_Name"
                    variant="outlined"
                    required fullWidth
                    value={blogdata.authorName}
                    onChange={handleinput}
                />
                <TextField
                    id="outlined-basic"
                    label="Book_Name"
                    variant="outlined"
                    required fullWidth
                    value={blogdata.bookName}
                    onChange={handleinput}
                />
                <TextField
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    required fullWidth
                    name='description'
                    multiline rows={3}
                    value={blogdata.description}
                    onChange={handleinput}
                />
                <Button type='submit' fullWidth variant="contained">Submit</Button>
                </Stack>
            </form>
        </Container>
    );
};

export default AddBlog;
