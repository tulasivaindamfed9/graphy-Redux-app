import * as React from "react";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppBar, Box, Toolbar, Typography, Button,Modal } from "@mui/material";
import { useState } from "react";
import LoginPopupModal from "../LoginPopupModal/LoginPopupModal";
import { loginData, logoutData } from "../../Redux-Toolkit/Auth/AuthSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const  isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [openModal,setOpenModal]=useState(false)

  function handleLogin() {
    setOpenModal(true);
  }

  function handleLogout() {
    dispatch(logoutData({ isAuthenticated: false }));
    
    setOpenModal(false);
    navigate("/")
  }

  function handleClose() {
    setOpenModal(false);
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Graphy
            </Typography>
            <Button color="inherit">Courses</Button>
            <Button color="inherit">Webinars</Button>
            <Button color="inherit">Digital Products</Button>
            {isAuthenticated ? (
              <Button color="inherit" onClick={handleLogout}>logout</Button>
            ) : (
              <Button color="inherit" onClick={handleLogin}>Login</Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {/* login modal popup */}
      

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {/*login component here  */}
          <LoginPopupModal onClose={handleClose}/>
          
       </Box>
      </Modal>
    </>
  );
}
