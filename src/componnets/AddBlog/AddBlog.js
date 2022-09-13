import React from 'react';
import {TextField, Button, Container} from "@mui/material";

const AddBlog = () => {
    const handlesubmit=()=>{

    }
    return (
        <Container sx={{mt: '20px'}}>
            <form onSubmit={handlesubmit}>
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    required fullWidth
                    name='name'
                />
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    required fullWidth
                    name='bookname'
                />
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    required fullWidth
                    name='description'
                />
                <Button variant="contained">Submit</Button>
            </form>
        </Container>
    );
};

export default AddBlog;
