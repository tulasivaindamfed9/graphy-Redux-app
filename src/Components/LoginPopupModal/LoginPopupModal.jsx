// import { loginData } from "../../Redux-Toolkit/Auth/AuthSlice";

// import React, { useState } from "react";
// import { Input } from "@mui/material";
// import { useDispatch, useSelector} from "react-redux";
// import { useNavigate } from 'react-router-dom'
// function LoginPopupModal(){
//   const data=useSelector(globalstate=>globalstate);
//   console.log("Importing global data of authSlice",data)
//   const dispatch=useDispatch();
//   const navigate=useNavigate();
//   const [userDetails,setUserDetails]=useState({
//     userName:"",
//     passWord:""
//   })
//   function handleUserCredentials(e){
//     const name=e.target.name;
//     const value=e.target.value;
//     setUserDetails({
//       ...userDetails,[name]:value
//     })
//     console.log("checking updated user details",userDetails)
//   }
//   function handleSubmit(){
//     dispatch(loginData({userDetails}));
//     navigate("/home");
//   }
//   return(
//     <>
//      <Input
//         slotProps={{ input: { className: 'CustomInputIntroduction' } }}
//         aria-label="Demo input"
//         placeholder="Enter Email.."
//         name="userName"
//         onChange={handleUserCredentials}
//       />
//         <Input
//         slotProps={{ input: { className: 'CustomInputIntroduction' } }}
//         aria-label="Demo input"
//         placeholder="Enter password.."
//         name="passWord"
//         onChange={handleUserCredentials}
//       />

//       <button onClick={handleSubmit}>Submit</button>
//     </>
//   )
// }
// export default LoginPopupModal;

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as React from "react";
import { TextField, Typography, Button, Box } from "@mui/material";
import { loginData } from "../../Redux-Toolkit/Auth/AuthSlice";

export default function LoginPopupModal({ onClose }) {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginCredentials, setLoginCredentials] = React.useState({
    email: "",
    passWord: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginCredentials({
      ...loginCredentials,
      [name]: value,
    });
    console.log("updated credentials", loginCredentials);
  }

  function handleLogin() {
    dispatch(
      loginData({ userDetails: loginCredentials, isAuthenticated: true })
    );
   
    
    navigate("/home ");
    onClose();
   
  }
  

  return (
    <>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography>Login</Typography>
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Password"
          name="passWord"
          type="password"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </>
  );
}
