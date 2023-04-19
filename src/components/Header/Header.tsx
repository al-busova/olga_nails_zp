import React from "react";
import { Logo } from "../Logo/Logo";
// import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router-dom";
// import { SocialLinks } from "../SocialLinks/SocialLinks";
import { AiOutlineMenu } from "react-icons/ai";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Menu,
  Typography
} from "@mui/material";
// import { Send } from "@mui/icons-material";

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
    <AppBar position="static" sx={{backgroundColor:'white'}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
          <Box>
            <Link to="/">
              <Logo />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 2 }}>
           <Link to="gallery"><Typography >Галерея</Typography> </Link>
            <Link to="services"><Typography >Послуги</Typography></Link>
            <Link to="useful"><Typography >Корисне</Typography></Link>
          </Box>
          {/* <SocialLinks /> */}
          {/* <Button variant="contained"  endIcon={<Send />}>
            Send
          </Button> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
