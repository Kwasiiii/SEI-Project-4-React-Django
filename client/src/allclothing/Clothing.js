import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Search from '../helpers/Search'

const Clothing = () => {
  const [clothing, setClothing] = useState(null)
  const [ fileteredProducts, setFilteredProducts ] = useState([])
  const [hasError, setHasError ] = useState(false)

  useEffect(()=>{
    const getClothing = async() => {
      try {
        const { data } = await axios('/api/products/')
        setClothing(data)
      } catch (error) {
        setHasError(true)
      }
    }
    getClothing()
  },[])
  
  const handleOptions = (e) => {
    let productToAdd = [...clothing]
    if (e.target.value === 'lh') {
      const lowProduct = productToAdd.sort((a, b) => {
        return ((a.price > b.price) ? 1 : -1)
      })
      productToAdd = [...lowProduct]
      setFilteredProducts(productToAdd)
    }
    if (e.target.value === 'hl') {
      const highProducts = productToAdd.sort((a, b) => {
        return ((a.price > b.price) ? -1 : 1)
      })
      console.log(highProducts)
      productToAdd = [...highProducts]
      setFilteredProducts(productToAdd)
    }
    if (e.target.value === 'all') { 
      const clothingSetToAll = [...clothing]
      setFilteredProducts(clothingSetToAll)
    }
  }
  <Search clothing={clothing} setFilteredProducts={setFilteredProducts}/>
  return (
    <div className="container">
      <div className="clothing-top">
        <h4>DESIGNER CLOTHING FOR MEN</h4>
        <p>Designer clothing for every aesthetic. Streetwear lovers, prepare for vivid pops of colour, lashings of print and graffiti styles courtesy of skating sensation Palm Angels. Think slogan T-shirts, essential sweatshirts and a laid-back vibe, or follow the arrows to the grey zone with Off-White for plenty of diagonal stripes. Minimal lovers align for understated satisfaction with Jil Sander and JOSEPH for clean lines and pared-back perfection.
        </p>
      </div>
      {clothing ?
        <><div className="filter">
          <div className="btn-group">
            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Sort
            </button>
            <ul className="dropdown-menu" onClick={handleOptions}>
              <li><option value="all" defaultValue>All</option></li>
              <li><option value="lh">Price: low to high</option></li>
              <li><option value="hl">Price: high to low</option></li>
            </ul>
          </div>
        </div><div className="card-deck all-clothing ">
          {(fileteredProducts.length > 0 ? fileteredProducts : clothing).map((clothes, i) => {
            return (
              
              <div  className="clothing col-lg-3" key={i}>
                <Link  to={`/products/${clothes.id}`}>
                  <div className="card ">
                    <img src={clothes.images[0]} className="img-back" alt="card back" onMouseOver={e => (e.currentTarget.src = clothes.images[2])} onMouseOut={e => (e.currentTarget.src = clothes.images[0])} />
                    <div className="card-body">
                      <h5>{clothes.brand}</h5>
                      <p>{clothes.name}</p>
                      <h6 className="product-price">£{clothes.price}</h6>
                    </div>
                  </div>
                </Link>
              </div>
              
            )
          })        
          }
        </div></>
        :
        <>
          {hasError ? 
            <>
              <h2 className="error-heading">Something Went Wrong</h2> 
              <div className="spinner-border d-flex align-content-center" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="d-flex justify-content-center">
                <Link to={'/'}>
                  <h4 className='error-btn'>Take me Home!</h4>
                </Link>
              </div>
            </>
            :
            <>
              <div className="spinner-border d-flex align-content-center" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </>
          }
        </>
      }
    </div>
  )
}

export default Clothing