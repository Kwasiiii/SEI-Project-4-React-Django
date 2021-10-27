import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductCard = ({ four }) => {

  const [product, setProduct] = useState(null)
  const [ hasError, setHasError ] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const getProduct = async() => {
      try {
        const { data } = await axios(`/api/products/${id}`)
        setProduct(data)
        console.log(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getProduct()
  }, [id])

  console.log(hasError)
  console.log(product)

  return (
    <div className="container">
      {product &&
      <><div className="cardpage-top d-flex">
        <div id="carouselExampleIndicators" className="carousel slide product-card-image" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"><img src={product.images} className="d-block w-100" /></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"><img src={product.images[1]} className="d-block w-100" /></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"><img src={product.images[2]} className="d-block w-100" /></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"><img src={product.images[3]} className="d-block w-100" /></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={product.images[0]} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={product.images[1]} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={product.images[2]} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={product.images[3]} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="product-detail d-flex flex-column">
          <h6>New Season</h6>
          <h4>{product.brand}</h4>
          <h6>{product.name}</h6>
          <h5>£{product.price}</h5>
          <div className="dropdown">
            <a className="btn btn-light size dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Select size {product.brand} Standard
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {product.size.map((size, i) => {
                return <li key={i}><a className="dropdown-item" href="#">{size}</a></li>
              })}
            </ul>
          </div>
          <button type="button" className="btn btn-dark shop-new-in-now-button" data-toggle="button" aria-pressed="false" autoComplete="off">
              Add To Basket
          </button>
        </div>
      </div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Shipping</button>
          <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Returns</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active d-flex" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div>
            <h6>New Season</h6>
            <h4>{product.brand}</h4>
            <h6>{product.name}</h6>
            <h5>Description</h5>
            <p>{product.description}</p>
            <h6>Highlight</h6>
            <ul>
              {product.highlight.map(light => {
                return <li key={light}>{light}</li>
              })}
            </ul>
            <h6>Composition</h6>
            <p>{product.composition}</p>
            <h6>Washing Instructions</h6>
            <p>{product.washing_instruction}</p>
            <h6>Wearing</h6>
            <p>Model is 1.86 m wearing size {product.wearing}</p>
          </div>
          <div className="model-pic">
            <img src={product.images[2]} alt="" />
          </div>
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <ul>
            <li>£4.49 via DPD 2-3 Day Standard Service</li>
            <li>£6.99 via DPD Next Working Day Priority Service</li>
            <li>FREE DPD 2-3 Day Standard Service on orders over £150.00</li>
          </ul>
        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          <p>If for some reason you are not happy with your purchase you can return it to us within 14 days for an exchange or refund.</p>
          <p>We are now offering FREE UK returns. For more information please visit our returns page.</p>
        </div>
      </div>
      <div className="new-in">
        <h3>Recomendations</h3>
      </div>
      <div className="new-in-products card-deck">
        {four.map((product, i)=> {
          return (
            <div key={i} className="card products col-lg-3">
              <img src={product.images[0]} className="img-back" alt="card back" onMouseOver={e => (e.currentTarget.src = product.images[2])} onMouseOut={e => (e.currentTarget.src = product.images[0])}/>
              <div className="card-body">
                <h6>New Season</h6>
                <h5>{product.brand}</h5>
                <p>{product.name}</p>
                <h6 className="product-price">£{product.price}</h6>
              </div>
            </div>
          )
        })}
      </div>
      </>
      }
      
    </div>
  )
}

export default ProductCard