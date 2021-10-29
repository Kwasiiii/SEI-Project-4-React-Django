import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userIsAuthenticated } from '../helpers/auth'
import { useCart } from 'react-use-cart'



const Navbar = ({ allProducts }) => {
  
  const [ category, setCategory] = useState(null)
  const {
    isEmpty,
    totalUniqueItems,
  } = useCart()

  useEffect(()=> {
    const getCategory = async() => {
      const { data } = await axios('/api/category/')
      // console.log(data)
      setCategory(data)
    }
    getCategory()
  },[])

  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
  }, [location.pathname])

  console.log('User is authenticated -->', userIsAuthenticated())

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }


  return (
    <div className="container">
      <header>
        <Link to="/">
          <img src="https://i.imgur.com/nhKUYP8.png" alt="logo" className="logo"/>
        </Link>
        <nav>
          <ul className="nav__links">
            <li className="nav_designer"><Link to="#" id="nav">Designer</Link>
              <div className="dropdownmen">
                {allProducts && Array.from(new Set(allProducts.map(pro => pro.brand))).map((brand) => { 
                  return <Link className="dropdown-item" value={brand} key={brand} to={`/products/brand/${brand}`}>{brand}</Link>
                })}
              </div>
            </li>
            <li className="nav_designer"><Link to="/clothing" id="nav">Clothing</Link>
              <div className="dropdownmen">
                {category && category.map(category => {
                  return <Link className="dropdown-item" value={category.name} key={category.id} to={`/products/category/${category.name}`}>{category.name}</Link>
                })}
              </div>
            </li>
            <li>
              {category && <Link className="nav-link" id="nav" to={`/products/category/${category[5].name}`}>{category[5].name}</Link>}
            </li>
          </ul>
        </nav>
        <div>
          {
            userIsAuthenticated() ?
              <><Link to="/#">
                <i className="far fa-user"></i>
              </Link><Link to="#">
                <i className="far fa-star"></i>
              </Link>
              <Link to="/cart">
                <i className="fas fa-shopping-basket"><span className="badge bg-danger">{isEmpty ? isEmpty : totalUniqueItems}</span></i>
              </Link>
              <Link to="#">
                <i onClick={handleLogout} className="fas fa-sign-out-alt"></i>
              </Link>
              </>
              :
              <><Link to="/login">
                <i className="far fa-user"></i>
              </Link><Link to="#">
                <i className="far fa-star"></i>
              </Link>
              <Link to="/cart">
                <i className="fas fa-shopping-basket"><span className="badge bg-danger">{isEmpty ? isEmpty : totalUniqueItems}</span></i>
              </Link>
              </>
          }
        </div>
      </header>
    </div>
  )
}

export default Navbar