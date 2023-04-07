import React from "react";
import { Logo } from "../Logo/Logo";
// import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { AiOutlineMenu } from "react-icons/ai";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Button,
  Menu,
} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {  Send } from '@mui/icons-material';

const ligthTheme = createTheme({
  palette: {
    primary: {
      main: '#ebc3d6',
    },
  },
});

export const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
         <ThemeProvider theme={ligthTheme}>
       <AppBar position="static" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <AiOutlineMenu />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Link to="gallery">Галерея</Link>
                <Link to="services">Послуги</Link>
                <Link to="useful">Корисне</Link>
              </Menu>
            </Box>
            <Box >
              <Link to="/">
              <Logo />
            </Link>
            </Box>
            
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
               
              <Link to="gallery">Галерея</Link>
              <Link to="services">Послуги</Link>
              <Link to="useful">Корисне</Link>
            </Box>
            <SocialLinks />
            <Button variant="contained" color="secondary" endIcon={<Send />}>
  Send
</Button>
          </Toolbar>
        </Container>
      </AppBar>
         </ThemeProvider>
     
  );
};
