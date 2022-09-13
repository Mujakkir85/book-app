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
    Rating
} from "@mui/material";
import { connect } from 'react-redux';
import { fetchPosts } from '../../mainredux/AllPosts/postAction';


const BestBook = ({ postData, fetchPosts }) => {

    // const [books, setBooks] = useState([])

    // useEffect(() => {
    //     fetch('data.json')
    //         .then(response => response.json())
    //         .then(data => setBooks(data.books))
    // }, [])

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