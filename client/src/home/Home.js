import React from 'react'

const Home = ({ product }) => {

  return (
    <div className="container">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.imgur.com/8gOIe0c.jpg" className="d-block w-100" alt="Hommes Plisse" />
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/2QA7FYp.jpg" className="d-block w-100" alt="tops" />
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/VLK8U5Q.jpg" className="d-block w-100" alt="comfy" />
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
      <div className="new-in-products card-deck">
        {product.map((product, i)=> {
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
      <div className="shop-new-in-now d-flex justify-content-center">
        <button type="button" className="btn btn-light shop-new-in-now-button" data-toggle="button" aria-pressed="false" autoComplete="off">
                Shop Now
        </button>
      </div>
    </div>
  )
}

export default Home