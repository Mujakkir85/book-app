import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

function Slider(props) {
    const items = [
        {
            name: 'AYA BOUCHIHA',
            description: 'The book description includes just enough about what is going to happen in the book, to make the reader yearn for answers to all the questions flitting through his or her mind…if the author has succeeded in writing a captivating description.',
            img: 'https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?w=1060&t=st=1662976855~exp=1662977455~hmac=6ad3222be2e3be4414f866f8bfe45a1ad26f41919b1b7351dcaec3c8553ada53'
        },
        {
            name: 'JOHN DOE',
            description: 'The book description includes just enough about what is going to happen in the book, to make the reader yearn for answers to all the questions flitting through his or her mind…if the author has succeeded in writing a captivating description.',
            img: 'https://img.freepik.com/free-photo/intellectual-banknote-student-sand-computer-graphic_1134-1185.jpg?w=1380&t=st=1662976930~exp=1662977530~hmac=99b27302ff758b9864a59bacf3d3fde4faff1febec959b855385364f811ac301'
        },
        {
            name: 'PITSU COMA',
            description: 'The book description includes just enough about what is going to happen in the book, to make the reader yearn for answers to all the questions flitting through his or her mind…if the author has succeeded in writing a captivating description.',
            img: 'https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5923.jpg?w=996&t=st=1662977957~exp=1662978557~hmac=f1a57ceb9faa1ab875f4b0268b509f5e5cd3c3ec287067214041b3d81cefc53c'
        },

    ];

    return (
        <Carousel>
            {items.map((item, i) => (
                <Item key={i} {...item} />
            ))}
        </Carousel>
    );
}


const Item = ({ name, description, img }) => {
    return (
        <Paper sx={{ postion: 'relative' }}>
            <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '400px', top: '100px', width: '600px', color: 'white' }} >
                <Typography variant='h4' gutterBottom>{name}</Typography>
                <Typography variant="body1" sx={{ fontSize: '18px' }} gutterBottom>{description}</Typography>
                <Button variant="contained" size="large" sx={{ mt: 3, p: 2 }} endIcon={<SendIcon />}>
                    Explore More
                </Button>
            </Box>
            <img style={{ height: '550px', width: '100%' }}
                src={`${img}`}
                alt={'{image}'}
                loading="lazy"
            />
        </Paper>

    );
};

export default Slider