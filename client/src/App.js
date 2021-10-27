import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './home/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Clothing from './allclothing/Clothing'
import ProductCard from './products/ProductCard'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/products/') // * <-- replace with your endpoint
      console.log(res.data)
    }
    getData()
  })

  const [product, setProduct] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios('/api/products/')
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
    <BrowserRouter>
      <Navbar/>
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
      </Switch>
    </BrowserRouter>
  )
}

export default App
