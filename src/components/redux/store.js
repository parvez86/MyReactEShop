import {createStore } from "redux";
import rootReducers from "./reducer";
import {configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";


const store = configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer
    }
})
console.log(store.getState());

export default store;