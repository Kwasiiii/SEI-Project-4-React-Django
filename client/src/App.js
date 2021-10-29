import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './home/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Clothing from './allclothing/Clothing'
import ProductCard from './products/ProductCard'
import Designer from './designers/Designer'
import Category from './category/Category'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Profile from './profile/Profile'
import Cart from './cart/Cart'
import { CartProvider } from 'react-use-cart'

function App() {

  const [product, setProduct] = useState([])
  const [ allProducts, setAllProducts ] = useState(null)
  const [hasError, setHasError] = useState(false)
  

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/products/') // * <-- replace with your endpoint
      console.log(res.data)
    }
    getData()
  })

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios('/api/products/')
        setAllProducts(data)
        const four = () => {
          let n = Math.floor(Math.random() * data.length)
          if (n > 47){
            n = n -= 4
          }
          const m = n + 4
          const fourData = data.slice(n, m)
          return fourData
        }
        const newData = four()
        setProduct(newData)
        console.log(data)
      } catch (error) {
        setHasError(true)
      }
    }
    getProduct()
  },[])

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar allProducts={allProducts}/>
        <Switch>
          <Route exact path='/'>
            <Home product={product} hasError={hasError}/>
          </Route>
          <Route exact path='/clothing'>
            <Clothing />
          </Route>
          <Route exact path='/products/:id'>
            <ProductCard four={product}/>
          </Route>
          <Route exact path='/products/brand/:brand'>
            <Designer />
          </Route>
          <Route exact path='/products/category/:category'>
            <Category />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
