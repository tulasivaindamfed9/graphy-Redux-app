import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated:false,
 
 userDetails:{
 email:"",
 passWord:""
 }
}

export const AuthSlice = createSlice({
  name: 'auth-slice',
  initialState,
  reducers: {
    loginData:(state,action)=>{
        
      state.userDetails=action.payload.userDetails;
      console.log(action.payload);
      state.isAuthenticated=action.payload.isAuthenticated;
      
    },
    logoutData:(state,action)=>{
      state.isAuthenticated=action.payload.isAuthenticated;
    }
  
  },
})

// Action creators are generated for each case reducer function
export const { loginData,logoutData } = AuthSlice.actions

export default AuthSlice.reducer