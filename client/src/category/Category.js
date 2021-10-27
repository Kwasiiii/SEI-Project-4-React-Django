import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const Category = () => {
  const [products, setProducts] = useState(null)

  const { category } = useParams()
  useEffect(()=>{
    const getProducts = async () => {
      const { data } = await axios(`/api/products/category/${category}`)
      console.log(data)
      setProducts(data)
    }
    getProducts()
  },[category])

  console.log(products)
  console.log(category)

  return (
    <div className="container">
      <div>
        {products && products.map(pro => pro.category).map((cat,i) => {
          console.log(cat)
          if (cat.name === category) {
            return cat
          }
          // console.log(cat[i].info)
          return <p key={i}>{cat.info}</p>
        })}
      </div>
      <div className="card-deck all-clothing ">
        {products && products.map((clothes, i) => {
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
    </div>
  )
}

export default Category