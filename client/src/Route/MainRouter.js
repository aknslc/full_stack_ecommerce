import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { PrivateLoginRegisterRoute, PrivateCartRoute } from '../Route/PrivateRoute'

// pages
import Home from '../pages/Home'
import Login from '../pages/Auth/Login/Login'
import Register from '../pages/Auth/Register/Register'
import SingleProduct from '../pages/ProductDetail/ProductDetail'
import Cart from '../pages/Cart/Cart'
import Favorites from '../pages/Favorites/Favorites'
import ProductsPage from '../pages/ProductsPage/ProductsPage'


const MainRouter = () => {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<PrivateCartRoute><Cart /></PrivateCartRoute>} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/:id' element={<SingleProduct />} />
            <Route path='/login' element={<PrivateLoginRegisterRoute><Login /></PrivateLoginRegisterRoute>} />
            <Route path='/register' element={<PrivateLoginRegisterRoute><Register /></PrivateLoginRegisterRoute>} />
        </Routes>


    )
}

export default MainRouter