import React from 'react'
import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cart',
    initialState:{products:[]},
    reducers:{
        addItem:(state, action) => {
            const product = action.payload;
            console.log(product);
            // console.log(state.products);
            console.log(state.products.length);
            const existIndx = state.products.findIndex((x) => x.id === product.id)
            // const exist = state.products.find((x) => x.id === product.id)
            console.log(existIndx);
            if(existIndx >=0){
                state.products[existIndx].qty+=1;
                console.log("afteer update: ", state.products[existIndx].qty);
                // state.products = state.products.map((x) => 
                //     x.id===product.id? {...x, qty: x.qty+1}:x
                // )
            }else {
                // state.products = state.products.length !== 0?[...state.products, {
                //     ...product,
                //     qty: 1
                // }]:[{
                //     ...product,
                //     qty:1
                // }]
                state.products.push({
                    ...product,
                    qty:1
                })
                console.log("aftere update: ", state.products[state.products.length-1]);
            }
        },
        delItem:(state, action) => {
            const product = action.payload;
            if(state.products.length>0){
                const existIndx = state.products.findIndex((x) => x.id === product.id)
                if(existIndx >=0){
                    if(state.products[existIndx].qty === 1){
                        // state.products = state.products.filter((x) => x.id !== product.id)
                        state.products.splice(existIndx, 1)

                    }else {
                        // state.products = state.products.map((x) => 
                        //     x.id === product.id ? {...x, qty:x.qty-1}: x
                        //  )
                        state.products[existIndx].qty-=1;
                        console.log("after delete: ", state.products[existIndx].qty);
                    }
                 }
                console.log(existIndx, "\t", state.products.length);
            }

        }
    }
})


export const {addItem, delItem} = cartSlice.actions
export default cartSlice.reducer;