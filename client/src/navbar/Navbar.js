import React from 'react'
import { Link } from 'react-router-dom'
// import Search from '../helpers/Search'


const Navbar = () => {
  
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Designers
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" >Action</Link>
                <Link className="dropdown-item" >Another action</Link>
                <Link className="dropdown-item" >Something else here</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Clothing
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/clothing">All Clothing</Link>
                <Link className="dropdown-item" >Another action</Link>
                <Link className="dropdown-item" >Something else here</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Shoes
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" >Action</Link>
                <Link className="dropdown-item" >Another action</Link>
                <Link className="dropdown-item" >Something else here</Link>
              </div>
            </li>
          </ul>
          <a className="navbar-brand" href="#">
            <img src="https://i.imgur.com/skMXpHl.png" width="200" height="69" alt=""/>
          </a>
        </div>
        <form className="form-inline">
          {/* <Search /> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <i className="far fa-user"></i>
            </li>
            <li className="nav-item">
              <i className="fas fa-shopping-basket"></i>
            </li>
          </ul>
        </form>
      </nav>
    </div>

  )
}

export default Navbar