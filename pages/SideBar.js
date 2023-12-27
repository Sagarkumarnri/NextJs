import { useState, useEffect } from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useRouter } from 'next/navigation'
import CloseIcon from '@mui/icons-material/Close';

const SideBar = ({ anchorElNav, setAnchorElNav }) => {
  const pages = ['Work Expirience', 'Education', 'Projects', "Skills"];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const appBarStyle = {
    backgroundColor: ' #c2c7cb',
    color: 'black'
  };

  const router = useRouter()
  const [active, setActive] = useState({
    summary: false,
    workExpirience: false,
    education: false,
    projects: false,
  });
  useEffect(() => {
    setActive({
      summary: true,
      workExpirience: false,
      education: false,
      projects: false,
    });
  }, []);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(false);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseNavMenu = (page) => {
    switch (page) {
      case "Education":
        router.replace(`/profile/education`);
        break;
      case "Work Expirience":
        router.replace(`/profile/workExpirience`)
        break;
      case "Projects":
        router.replace(`/profile/projectsList`)
        break;
      case "Skills":
        router.replace(`/profile/skills`)
        break;





    }

    //    router.push(`profile/${page}`)
    setAnchorElNav(true);
    console.log(page)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" color="secondary" style={appBarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Sagar Kumar Patra
          </Typography>



          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}

          >
            Sagar
          </Typography>
          <Typography
            variant="h20"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,

              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {`Fullstack Developer`}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {anchorElNav && <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>}
            {!anchorElNav && <CloseIcon onClick={(e) => setAnchorElNav(true)} />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  )
}
export default SideBar;