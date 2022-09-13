import { Typography } from '@mui/material';
import React from 'react';
import BestBook from './BestBook/BestBook';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Typography variant='h4' sx={{ mt: 4, mb: 4, fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>BEST SELLING BOOKS</Typography>
            <BestBook></BestBook>
        </div>
    );
};

export default Home;