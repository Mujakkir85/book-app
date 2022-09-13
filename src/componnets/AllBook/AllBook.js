import React, { useEffect, useState } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Stack,
    colors,
    Grid,
    Box,
    Container, Modal, Rating
} from "@mui/material";
import { connect } from 'react-redux';
import { fetchPosts } from '../../mainredux/AllPosts/postAction';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};


const AllBook = ({ postData, fetchPosts }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //const [books, setBooks] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    if (postData.loading) return <h2>Loading</h2>

    console.log(postData.posts)

    return (

        <Box sx={{ mx: "100px", marginTop: '15px', marginBottom: '30px' }}>

            <Grid Grid container spacing={{ xs: 2, md: 3 }} >
                {
                    postData.posts.map((book) =>
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
                                    <div>
                                        <Button onClick={handleOpen}>Open modal</Button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                {/* <img
                                                    src={`${book.url}`}
                                                    alt={book.title}
                                                    loading="lazy"
                                                /> */}
                                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                                    {book.title}
                                                </Typography>
                                                <Typography>{book.author}</Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                    {book.detail}
                                                </Typography>
                                                <Rating name="size-medium" defaultValue={`${book.rating}`} />
                                            </Box>
                                        </Modal>
                                    </div>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
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
)(AllBook)

//export default AllBook;