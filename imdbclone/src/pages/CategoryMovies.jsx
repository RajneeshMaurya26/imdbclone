import {useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import Header from '../components/common/Header';
import {Box,Divider,Typography,styled} from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { POPULAR_API_URL,TOPRATED_API_URL,UPCOMING_API_URL, movieType } from '../constant/constant';
import { categoryMovies } from '../services/api';
import MoviesList from '../components/MoviesList';


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
  width: '100%',
  height: 450
});

const Component = styled(Box)`
  width:80%;
  margin:auto;
`
const Conatiner = styled(Box)`
  background:#F5F5F5;
  padding:10px;
`
const CategoryMovies = () => {

    const {search} = useLocation();

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const data = async(API_URL) => {
          let response = await categoryMovies(API_URL);
          setMovies(response.results);
        }
        let API_URL = '';
        if(search.includes('popular')){
            API_URL = POPULAR_API_URL;
        } else if(search.includes('toprated')){
            API_URL = TOPRATED_API_URL;
        } else if(search.includes('upcoming')){
            API_URL = UPCOMING_API_URL;
        }
        data(API_URL);
    },[search])
    return (
        <>
            <Header />
            <Component>
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
                            <>
                                <ImageStyle src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='Movie Image' />
                                {/*<Title>{movie.original_title}</Title> */}
                            </>

                        )
                    }
                </Carousel>
                <Conatiner>
                    <Typography variant='h6'>IMDb Charts</Typography>
                    <Typography variant='h4'>IMDb {movieType[search.split('=')[1]]} Movies</Typography>
                    <Typography style={{fontSize:12}}>IMDb Top {movies.length} as reted by regular IMDb voters.</Typography>
                    <Divider/>
                    <MoviesList movies={movies}/>
                </Conatiner>
            </Component>
        </>
    )
}

export default CategoryMovies;