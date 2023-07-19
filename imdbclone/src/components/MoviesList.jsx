
import { List, ListItem,Typography,styled } from '@mui/material';
import { Star } from '@mui/icons-material';

const Banner = styled('img')({
    width:47,
});

const Conatiner = styled(List)`
  display:flex;
`;


const MoviesList = ({movies}) => {
  return (
    <>
        {
            movies.map(movie => (
                <Conatiner>
                    <ListItem>
                        <Banner src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='poster'/>
                    </ListItem>
                    <ListItem><Typography>{movie.original_title}</Typography></ListItem>
                    <ListItem>
                        <Star color='warning'/>
                        <Typography>{movie.vote_average}</Typography>
                    </ListItem>
                    <ListItem><Typography>{movie.release_date}</Typography></ListItem>
                </Conatiner>
            ))
        }
    </>
  )
}

export default MoviesList;