import React from 'react';
import { Box,styled } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ImageStyle = styled('img')({
  width: '100%'
});
const Banner = ({ movies }) => {
  return (
    <Box style={{ width: '65%' }}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        swipeable={false}
        draggable={false}
        keyBoardControl={true}
        slidesToSlide={1}
      >
        {
          movies.map(movie =>
            <ImageStyle src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='Movie Image' />
          )
        }
      </Carousel>
    </Box>
  )
}

export default Banner;