import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Products from './page/Products'
import About from './page/About'
import Contact from './page/Contact'
import Login from './page/Login'
import Register from './page/Register'
import Cart from './page/Cart'
import Product from './page/Product'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path='/products' element={<Products/>}/>
            <Route exact path='/product/:id' element={<Product/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router