import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant/constants";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, isAuthenticated: false,data:[], userDetails:[] },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    login: (state, action) => {
      state.user = action.payload.email;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.token = action.payload.token;
    },
    jwtToken: (state, action) => {
      state.user = action.payload.email;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.token = action.payload.token;
    },
    getData:(state,action) =>{
    state.user = action.payload.email;
        state.isAuthenticated = action.payload.isAuthenticated;
        state.data = action.payload.data; 
    },
    details:(state,action) =>{
      state.user = action.payload.email;
          state.isAuthenticated = action.payload.isAuthenticated;
          state.userDetails = action.payload.userDetails; 
      }
  },
});

export const { setCredentials, login, jwtToken,getData,details } = authSlice.actions;
export default authSlice.reducer;

export const getClients=()=> async(dispatch,config)=>{
 
  // let config = {
  //   headers: {
  //     Authorization: "Bearer " + token
  //   },
  // };
  try {
    const resp =await axios.get(BASE_URL + "api/clients/AR", {config});
    if (resp.data.errorMsg === "success") {
      dispatch(details(resp.data.response))
    } else {
      alert(resp.data.response);
    }
    
  } catch(error){
    console.log(error)
  }
}



