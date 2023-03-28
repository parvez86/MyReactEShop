import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const userSlice = createSlice( {
    name:"user",
    initialState: {users:[{name:"sp", email:"sp@gmail.com", password:"sp12345"}], isLogin:false},
    reducers:{
        addUser:(state, action)=> {
            let user = action.payload
            if(!state.users.find((x) => x.email === user.email)){
                state.users = [
                    {
                        ...state.users,
                        ...user
                    }
                ]
                console.log('====================================');
                console.log("User successfully added: ", user);
                console.log('====================================');
            }else{
                console.log('====================================');
                console.log("Invalid credentials");
                console.log('====================================');
            }
        },
        delUser:(state, action) => {
            const user = state.users.find((x) => x.email === action.payload.email)
            if(user){
                state.users = state.users.filter((x) => x.email === user.email)
                console.log('====================================');
                console.log("user successfully added");
                console.log('====================================');
            }
        },
        login:(state, action) => {
            const userInfo = action.payload
            console.log('====================================');
            console.log("length: ", state.users.length);
            console.log('====================================');
            const existIndex = state.users.findIndex((x) => x.email===userInfo.email && x.password===userInfo.password)
            console.log('====================================');
            console.log("index: ", existIndex);
            console.log('====================================');
            if(existIndex >= 0){
                state.isLogin=true
                console.log('====================================');
                console.log("user successfully logined");
                console.log('====================================');
                // return true;
            }else {
                console.log('====================================');
                console.log("log failed");
                console.log('====================================');
            }
            // return state.isLogin
            // return false
        },
        logout:(state, action) => {
            state.isLogin = false
            console.log('====================================');
            console.log("user successfully logout");
            console.log('====================================');
            // // return state.isLogin
            // return false
        }
    }
})

export const {addUser, delUser, login, logout} = userSlice.actions

export default userSlice.reducer