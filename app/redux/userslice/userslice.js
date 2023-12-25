import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";


const inititialstate = {
    userdata:"",
    isAuthenticated:false,
    vendordata:""
}
const userslice = createSlice({
    name:'user',
   initialState:inititialstate,
   reducers:{
    login(state,action){
        console.log("aactio",action.payload)
        state.userdata = action.payload,
        state.isAuthenticated = true
    },
    logout(state,action){
        state.userdata = null
        state.isAuthenticated = false
    },
    vendordata(state,action){
       state.vendordata = action.payload
    }
   }
})


export const {login,logout,vendordata} = userslice.actions;

export default userslice.reducer;