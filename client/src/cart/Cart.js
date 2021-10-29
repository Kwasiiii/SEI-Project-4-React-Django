import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart()

  console.log(items)

  if (isEmpty) return <div className="container"><h2>Your cart is empty</h2></div>

  return (
    <div className="container">
      <div className="form-style">
        <div className="shopping-cart">
          <h2>SHOPPING BAG ({totalUniqueItems})</h2>
          <ul>
            {items.map((item) => (
              <><hr /><li key={item.id}>
                <div className="d-flex mt-5">
                  <div className="cart-image">
                    <img src={item.images[0]} alt="" />
                  </div>
                  <div className="cart-name">
                    <h5>{item.brand}</h5>
                    <p>{item.name}</p>
                  </div>
                  <div className="cart-price">
                    <h6>Price</h6>
                    <h5>£{item.price}</h5>
                  </div>
                  <div className="cart-Q">
                    <h6>Quantity</h6>
                    <h5>{item.quantity}</h5>
                  </div>
                  <div className="cart-remove">
                    <button className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;</button>
                  </div>
                </div>
                <div className="cart-button">
                  <button className="btn btn-dark w-50" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                  -
                  </button>
                  <button className="btn btn-primary w-50" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                  +
                  </button>
                </div>
              </li></>
            ))}
          </ul>
          <hr />
          <h3>Total: £{cartTotal}</h3>
        </div>
      </div>
    </div>
  )
}

export default Cart