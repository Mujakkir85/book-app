import React, { useEffect, useState } from 'react';

import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Grid,
    Box,
    Rating, Modal, TextField, Stack
} from "@mui/material";
import { connect } from 'react-redux';
import { fetchPosts } from '../../mainredux/AllPosts/postAction';

const BestBook = ({ postData, fetchPosts }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 3,
        boxShadow: 34,
        p: 4,
    };
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        useEffect(() => {
        fetchPosts()
    }, [])

    const bestbook = postData.posts.slice(0, 6);

    console.log(bestbook)

    return (
        <Box sx={{ mx: "100px", marginTop: '15px', marginBottom: '30px' }}>

            <Grid Grid container spacing={{ xs: 2, md: 3 }} >
                {
                    bestbook.map((book) =>
                        <Grid item xs={12} sm={6} md={4} >
                            <Card sx={{ height: 500 }} >
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={`${book.url}`}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {book.title}
                                    </Typography>
                                    <Typography>
                                        {book.author}
                                    </Typography>
                                    <Rating name="size-medium" defaultValue={`${book.rating}`} />
                                    <Typography variant="body2" color="text.secondary">
                                        {book.detail}
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button >Buy Now</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>


            <Box sx={{display:'flex', justifyContent:'center', mt:4}}>
                <Button sx={{fontSize:'18px', fontWeight:'bold'}} variant='outlined' onClick={handleOpen}>Give Feed Back</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {/*<Typography id="modal-modal-title" variant="h6" component="h2">*/}
                        {/*    Text in a modal*/}
                        {/*</Typography>*/}
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Stack spacing={2}>
                            <TextField id="outlined-basic" label="First-Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Last-Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Book-Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Author-Name" variant="outlined" />
                                <Box sx={{display:'flex', justifyContent:'center'}}>
                                <Button
                                    sx={{width:'40%', fontWeight:'bold'}}
                                    variant="outlined">
                                    SUBMIT
                                </Button>
                                </Box>
                            </Stack>
                        </Typography>
                    </Box>
                </Modal>
            </Box>

        </Box>
    );
};

const mapStateToProps = state => {
    return {
        postData: state.post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps
)(BestBook)

//export default BestBook;