import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ product }) => {

  return (
    <><div className="container">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.imgur.com/bNX5xas.jpg" className="d-block w-100" alt="gucci"/>
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/0g3VWAn.jpg" className="d-block w-100" alt="stone"/>
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/8gOIe0c.jpg" className="d-block w-100" alt="hommes"/>
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
      <div className="first card-deck d-flex">
        <div className="card col-lg-6 first-left d-flex flex-column justify-content-center">
          <h3>GIFTS FOR YOUR FAVORITE PEOPLE</h3>
          <p>Searching for a design purist, sneaker freak or, indeed, yourself? Whoever you’re shopping for this holiday season, find the world’s greatest selection of designer gifts, guaranteed to please every taste and style, right here</p>
          <button type="button" className="btn btn-light shop-new-in-now-button" data-toggle="button" aria-pressed="false" autoComplete="off">
                Read And Shop
          </button>
        </div>
        <div className="card col-lg-6 first-image">
          <img src="https://i.imgur.com/hzwyKGp.jpg" className="card-image" alt="picture" />
        </div>
      </div>
      <div className="second card-deck d-flex">
        <div className="card col-lg-6 second-left">
          <img src="https://i.imgur.com/qa2XVw1.jpg" className="card-image" alt="picture" />
          <p>FALL-DEFINING ACCESSORIES<br />The cult sneakers. The modern-classic jewelry. The new hype man-bag. Creative director @nlswolf models and edits the finishing touches that will complete your wardrobe this season</p>
        </div>
        <div className="card col-lg-6 second-image">
          <img src="https://i.imgur.com/czzR5Zh.jpg" alt="" />
        </div>
      </div>
      <div className="new-in">
        <h3>New in: hand-picked daily from the world’s best brands and boutiques</h3>
      </div>
      <div className="card-deck all-clothing ">
        {product && product.map((clothes, i) => {
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
      </div>
      <div className="shop-new-in-now d-flex justify-content-center">
        <Link to="/clothing">
          <button type="button" className="btn btn-light shop-new-in-now-button" data-toggle="button" aria-pressed="false" autoComplete="off">
                  Shop Now
          </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Home