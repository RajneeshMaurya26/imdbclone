import {useEffect, useState} from 'react'
import Header from '../components/common/Header';
import Banner from '../components/Banner';
import Slide from '../components/Slide';
import { categoryMovies } from '../services/api';
import {NOWPLAYING_API_URL} from '../constant/constant';
import { Box, styled } from '@mui/material';
import Upnext from '../components/Upnext';

const Wrapper = styled(Box)`
  display:flex;
  padding: 20px 0;
`
const Component = styled(Box)`
  padding: 0 115px;
`

const Home = () => {

  const [movies, setMovies] = useState([]);
  useEffect( () => {
    const data = async() => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    }
    data();
  },[])

  return (
    <>
      <Header/>
      <Component>
        <Wrapper>
          <Banner movies={movies}/>
          <Upnext movies={movies}/>
        </Wrapper>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
      </Component >
      
    </>
    
  )
}

export default Home;