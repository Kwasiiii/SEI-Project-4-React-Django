import React from 'react'
import axios from 'axios'
import Home from './home/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Clothing from './allclothing/Clothing'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/products/') // * <-- replace with your endpoint
      console.log(res.data)
    }
    getData()
  })

  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/clothing'>
          <Clothing />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
