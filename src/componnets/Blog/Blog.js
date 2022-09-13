import React from 'react';
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

const Blog = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setBooks(data.books))
    }, [])

    return (
        <Box sx={{ display: 'flex', mx: '20px', mt: '20px' }}>
            <Box sx={{ width: '70%', height: '100vw' }}>
                <ImageList variant="masonry" cols={4} gap={8}>
                    {books.map((item) => (
                        <ImageListItem key={item.url}>
                            <img
                                src={`${item.url}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mx: 2 }}>
                <Typography variant='h5' sx={{ display: 'flex', justifyContent: 'center' }}>Author Lists</Typography>
                {itemData.map((data) => (
                    <ListItem alignItems="flex-center">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={`${data.img}`} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${data.title}`}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />

                    </ListItem>))}
            </List>
        </Box>
    );
}

export default Blog
const itemData = [
    {
        img: 'https://img.freepik.com/free-photo/thoughtful-businessman-sitting-office-desk-writing-trying-think-up-idea-squinting-as-pondering-new-content_176420-15902.jpg?size=626&ext=jpg',
        title: 'D.D.Bekar',
    },
    {
        img: 'https://img.freepik.com/free-photo/handsome-young-businessman-working-office_1301-3916.jpg?w=996&t=st=1663036706~exp=1663037306~hmac=33368922a0f8a7a56c39425c0955484bcb72350a8597bc1ec56264908fbdf944',
        title: 'Jhon GRA',
    },
    {
        img: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-poetry-illustration_23-2149298508.jpg?size=338&ext=jpg',
        title: 'Mark Sink',
    },
    {
        img: 'https://img.freepik.com/free-photo/successful-old-businessman-suit-glasses-looking-confident_176420-31742.jpg?size=626&ext=jpg',
        title: 'R R Kevin',
    },
    {
        img: 'https://img.freepik.com/free-photo/successful-old-businessman-suit-glasses-looking-confident_176420-31742.jpg?size=626&ext=jpg',
        title: 'Brosta Krttam',
    },
    {
        img: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-poetry-illustration_23-2149298508.jpg?size=338&ext=jpg',
        title: 'Charat Jasfat',
    },
    {
        img: 'https://img.freepik.com/free-photo/photo-young-inexperienced-entrepreneur-records-information-from-business-documents-notepad-studies-graphics-charts-gets-prepared-presenting-information-investors-drinks-coffee_273609-29632.jpg?size=626&ext=jpg',
        title: 'R R Kevin',
    },
    {
        img: 'https://img.freepik.com/free-photo/writer-work-handsome-young-writer-sitting-table-writing-something-his-sketchpad_155003-5204.jpg?size=626&ext=jpg',
        title: 'Mark Sink',
    },
    {
        img: 'https://img.freepik.com/free-photo/photo-young-inexperienced-entrepreneur-records-information-from-business-documents-notepad-studies-graphics-charts-gets-prepared-presenting-information-investors-drinks-coffee_273609-29632.jpg?size=626&ext=jpg',
        title: 'Bell Fotry',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Kell Harme',
    },
    {
        img: 'https://img.freepik.com/free-photo/photo-young-inexperienced-entrepreneur-records-information-from-business-documents-notepad-studies-graphics-charts-gets-prepared-presenting-information-investors-drinks-coffee_273609-29632.jpg?size=626&ext=jpg',
        title: 'Mikale Mark',
    },
    {
        img: 'https://img.freepik.com/free-photo/writer-work-handsome-young-writer-sitting-table-writing-something-his-sketchpad_155003-5204.jpg?size=626&ext=jpg',
        title: 'Corren Karter',
    },
];