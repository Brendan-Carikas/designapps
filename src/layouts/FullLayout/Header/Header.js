import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  Avatar,
  Divider,
} from "@mui/material";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../../contexts/AuthContext";

const Header = ({ sx, toggleSidebar }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentUser, logout } = useAuth();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      handleClose();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <AppBar
      sx={{
        ...sx,
        background: "#fff",
        color: "#000",
        boxShadow: "0px 7px 30px 0px rgb(90 114 123 / 11%)",
      }}
      position="fixed"
    >
      <Toolbar>
        {!lgUp && (
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
            size="large"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Box flexGrow={1} />

        <Button
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
          sx={{ ml: 2 }}
        >
          <Avatar
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces"
            alt="User"
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          sx={{
            "& .MuiMenu-paper": {
              width: "200px",
              right: 0,
              top: "70px !important",
            },
          }}
        >
          <MenuItem
            component={Link}
            to="/my-account/profile"
            onClick={handleClose}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces"
                alt="User"
                sx={{
                  width: "24px",
                  height: "24px",
                  mr: 1,
                }}
              />
              Profile
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  toggleSidebar: PropTypes.func,
};

export default Header;
