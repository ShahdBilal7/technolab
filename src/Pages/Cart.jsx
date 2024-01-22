import { useDispatch, useSelector, Breadcrum, FontAwesomeIcon, Hero, Link, addToCart, decreaseCart, removeFromCart } from "../Constants"

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }

  return (
    <>
      <Hero />
      <div className="container">
        <div className="pt-4">  <Breadcrum Category={"Home"} SubCategory={"Shop"} Data={"Cart"} /></div>

        <section className="cart row ">
          <div className="col-lg-9 my-4">
            <div id="cart-info" className="cart-info ">
              <table>
                <thead>
                  <tr>
                    <th colSpan="2">Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                {cart.cartItems.length === 0 ?
                  <tfoot>
                    <tr>
                      <td colSpan="6" style={{ border: "none", paddingTop: "50px" }}>
                        <h2 >No Items In The Cart</h2>
                        <Link className=" empty" to="/Products"> Continue Shopping  </Link>
                      </td>
                    </tr>
                  </tfoot>
                  :
                  <tbody>
                    {cart.cartItems?.map(cartItem => (
                      <tr key={cartItem.id}>
                        <td style={{ borderRight: "1px solid #fff" }} >
                          <img style={{ width: "70px" }} src={cartItem.image} alt={cartItem.name} />
                        </td>
                        <td >{cartItem.name}</td>
                        <td>{cartItem.price}</td>
                        <td>
                          <div className="input-group">
                            <button className="btn mi-btn" onClick={() => handleDecreaseCart(cartItem)}>
                              <FontAwesomeIcon icon="fa fa-minus" />
                            </button>
                            <div type="text" className="form-control"> {cartItem.cartQuantity} </div>
                            <button className="btn pl-btn" onClick={() => handleIncreaseCart(cartItem)}>
                              <FontAwesomeIcon icon="fa fa-plus" />
                            </button>
                          </div>
                        </td>
                        <td>{cartItem.price * cartItem.cartQuantity}</td>
                        <td>
                          <button className="btn ti-btn" onClick={() => handleRemoveFromCart(cartItem)}>
                            <FontAwesomeIcon icon="fa fa-times" />
                          </button>
                        </td>
                      </tr>

                    ))}

                  </tbody>}
              </table>
            </div></div>
          <div className=" col-lg-3 my-4">
            <div className=" to-pay">
              <div className="order-summary">
                <h4>Order Summary</h4>
              </div>
              <div className="cart-body">
                <div className="col-f">
                  <h6>Subtotal</h6>
                  <h6 id="subtotal">{cart.cartTotalAmount}$</h6>
                </div>
                <div className="col-f">
                  <h6>Shipping</h6>
                  <h6>0$</h6>
                </div>
              </div>
              <div className="checkout">
                <div className="col-f">
                  <h5>Total</h5>
                  <h5 id="total">{cart.cartTotalAmount}$</h5>
                </div>
                <button className="btn ch-btn">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </section>

      </div>

    </>
  )
}

export default Cart
