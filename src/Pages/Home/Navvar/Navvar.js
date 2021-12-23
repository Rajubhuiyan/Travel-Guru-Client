import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import whiteLogo from '../../../images/Untitled-1.png';
import blackLogo from '../../../images/Logo.png';
import {  Container } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navvar.css';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    color:'black',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Navvar({search}) {





    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

   

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',

            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Link style={{ textDecoration: 'none', color: 'black', marginRight: '23px',}} to='/'>News</Link>
            </MenuItem>
            <MenuItem>
                <Link style={{ textDecoration: 'none', color: 'black', marginRight: '23px' }} to='/'>Destination</Link>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <Link style={{ textDecoration: 'none', color: 'black', marginRight: '23px' }} to='/'>Blog</Link>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <Link style={{ textDecoration: 'none', color: 'black', marginRight: '23px' }} to='/'>Contact</Link>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Log In</Link>
            </MenuItem>
        </Menu>
    );




    return (
        <Container>
            <Box sx={{ flexGrow: 1, }}>
                <AppBar className="nav-container" position="static">
                    <Toolbar>
                        <Link style={{textDecoration:"none"}} to="/"><img style={{ width: '120px' }} src={search === true ? blackLogo: whiteLogo} alt="" /></Link>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search Your Destination...."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Link className={search === true ? 'black' : 'white'} style={{ textDecoration: 'none', color: 'white', marginRight: '23px' }} to='/'>News</Link>
                            <Link className={search === true ? 'black' : 'white'} style={{ textDecoration: 'none', color: 'white', marginRight: '23px' }} to='/'>Destination</Link>
                            <Link className={search === true ? 'black' : 'white'} style={{ textDecoration: 'none', color: 'white', marginRight: '23px' }} to='/'>Blog</Link>
                            <Link className={search === true ? 'black' : 'white'} style={{ textDecoration: 'none', color: 'white', marginRight: '23px' }} to='/'>Contact</Link>
                            <Link className={search === true ? 'black login-btn' : 'white login-btn'} style={{ textDecoration: 'none' }} to='/'>Log In</Link>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
            </Box>
        </Container>
    );
}