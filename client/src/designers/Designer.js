import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'


const Designer = () => {
  const [products, setProducts] = useState(null)

  const { brand } = useParams()
  useEffect(()=>{
    const getProducts = async () => {
      const { data } = await axios(`/api/products/brand/${brand}`)
      console.log(data)
      setProducts(data)
    }
    getProducts()
  },[brand])

  console.log(products)

  return (
    <div className="container">
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

export default Designer