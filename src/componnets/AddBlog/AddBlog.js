import React from 'react';
import {TextField, Button, Container, Stack, Typography} from "@mui/material";

const AddBlog = () => {
    const [blogdata, setBlogdata] = useState([]);

    data: [...prevState.data,
        {
            fname: prevState.fname,
            lname: prevState.lname,
            email: prevState.email,
            subject: prevState.subject
        }]

    const handleSubmit=(event)=>{
        event.preventDefault();
        
        const authorName = event.target.name.value;
        const bookName = event.target.bookName.value;
        const description = event.target.description.value;
        console.log(authorName, bookName, description)

        event.target.name.value = '';
        event.target.bookName.value = '';
        event.target.description.value = '';
    }
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
                    name='name'
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
