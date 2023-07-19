
import React, { useState } from 'react';
import {AppBar,Box,InputBase,Toolbar,Typography,styled} from '@mui/material';
import { LogoUrl } from '../../constant/constant';
import {BookmarkAdd, ExpandMore, Menu} from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import { routePath } from '../../constant/route';
import { useNavigate } from 'react-router-dom';


const StyledToolBar = styled(Toolbar)`
  min-height:56px !important;
  background:#121212;
  padding: 0 115px !important;
  justify-content:space-between;
  & > * {
    padding: 0 16px;
  }
  & > div {
    display:flex;
    cursor:pointer;
    align-items:center;
    & > p {
        font-size:14px;
      }
  }
  
  & > p {
    font-size:14px;
    cursor:pointer;
  }
`
const InputF = styled(InputBase)`
  width:46%;
  background:#ffffff;
  border-radius:2px;
  height:30px;
`
const LogoImg = styled('img')({
    width:64, 
  cursor:'pointer'
})

const Header = () => {
    const [open, setopen] = useState(null);
    const handleClick = (e) => {
        setopen(e.currentTarget);
    }
    const handleClose = () => {
        setopen(null);
    }

    const Navigate = useNavigate();
 
  return (
    <AppBar position='static'>
        <StyledToolBar>
            <LogoImg src={LogoUrl} alt='Logo' onClick={() => Navigate(routePath.home)}/>
            <Box onClick={handleClick} >
                <Menu/>&nbsp;
                <Typography>Menu</Typography>
            </Box>
            <HeaderMenu open={open} handleClose={handleClose}/>
            <InputF/>
            <Typography>IMDb<Box component='span'>Pro</Box></Typography>
            
            <Box>
                <BookmarkAdd/>&nbsp;
                <Typography>Watchlist</Typography>
            </Box>
            <Typography>Sign In</Typography>
            <Box>
                <Typography>EN</Typography>
                <ExpandMore/>
            </Box>
        </StyledToolBar>
    </AppBar>
  )
}

export default Header;