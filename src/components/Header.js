import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './Header.css'
import { Link } from 'react-router-dom';
import { FREE_WORKOUTS, PROGRAMS, WORKOUTS, ABOUT, MY_PROFILE, MY_WORKOUTS, LOGOUT, TRAINER } from '../constances/HomePageConstants'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Logout } from '../actions/userActions'


const ResponsiveAppBar = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState('')
  const navigate = useNavigate()
  const [log, setLog] = useState(false)

  const { user: { userInfo, logouted } } = useSelector((state) => {
    return state
  })

  useEffect(() => {

    const userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      let data = JSON.parse(userInfo)
      setUser(data)
    }

  }, [])

  //logout fuction
  const logout = () => {
    dispatch(Logout())
    setTimeout(() => {
      navigate('/login')
    }, 0);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='main_header' position="static">

      <Toolbar className='header mx-5' disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          <Link to={'/'}> <img alt='' height={'100px'} src='/images/profile/logo.png'></img></Link>
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >

            <MenuItem onClick={handleCloseNavMenu}>
              <Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {FREE_WORKOUTS}
              </Button>
              <Link style={{ textDecorationLine: 'none' }} to={'/programs'}>  <Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {PROGRAMS}
              </Button></Link>
              <Link style={{ textDecorationLine: 'none' }} to={'/workout'}>      <Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {WORKOUTS}
              </Button>       </Link>



              {!user && <Link to={'/trainerlogin'} style={{ textDecorationLine: "none" }}><Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {TRAINER}
              </Button></Link>}
            </MenuItem>

          </Menu>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >
          Health Coach
        </Typography>
        <Box sx={{ justifyContent: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          <Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {FREE_WORKOUTS}
          </Button>
          <Link style={{ textDecorationLine: 'none' }} to={'/programs'}>  <Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {PROGRAMS}
          </Button></Link>
          <Link style={{ textDecorationLine: 'none' }} to={'/workout'}>      <Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {WORKOUTS}
          </Button>       </Link>


          {/* <Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {ABOUT}
          </Button> */}
          {!user && <Link to={'/trainerlogin'} style={{ textDecorationLine: "none" }}><Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {TRAINER}
          </Button></Link>}


        </Box>
        {user && <Typography className='username'>{user.name}</Typography>}
        {!user && <Link to={'/login'} style={{ textDecorationLine: 'none' }} >  <Button sx={{ marginRight: "9px" }} variant="outlined" >
          Login
        </Button></Link>}
        {!user && <Link to={'/signup'} style={{ textDecorationLine: 'none' }}><Button sx={{ marginRight: "9px" }} variant="outlined" >
          Signup
        </Button></Link>}
        {/* {user && <Button onClick={logout} sx={{ marginRight: "9px" }} variant="outlined" >
          Logout
        </Button>} */}

        {user &&
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/myprofile'}><Typography textAlign="center">{MY_PROFILE}</Typography></Link>

              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/myworkouts'}><Typography textAlign="center">{MY_WORKOUTS}</Typography></Link>

              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography onClick={logout} textAlign="center">{LOGOUT}</Typography>

              </MenuItem>


            </Menu>
          </Box>
        }
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;

