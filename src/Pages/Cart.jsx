import { Breadcrum, FontAwesomeIcon, Hero, logoImage } from "../Constants"

const Cart = () => {
  return (
    <>
      <Hero />
      <div className="container">
      <div className="pt-4">  <Breadcrum  Category={"Home"} SubCategory={"Shop"} Data={"Cart"} /></div>
      
        <section className="cart row my-4">
          <div className="col-lg-9">
            <div id="cart-info" className="cart-info ">
              <table>
                <thead>
                  <tr>
                    <th colspan="2">Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                <tr>      
    <td style={{borderRight:"1px solid #fff"}} >
       <img style={{width:"70px"}} src={logoImage} alt=""/> 
    </td>
    <td >Silly Jokes</td>
    <td>$9</td>
    <td>
      <div class="input-group">
        <button class="btn mi-btn">
        <FontAwesomeIcon icon="fa fa-minus"/>
        </button>
        <input type="text" class="form-control" value="1"/>
        <button class="btn pl-btn">
        <FontAwesomeIcon icon="fa fa-plus"/>
        </button>
      </div>
    </td>
    <td>$9</td>
    <td>
      <button class="btn ti-btn">
        <FontAwesomeIcon icon="fa fa-times"/>
      </button>
    </td>
  </tr>
                </tbody>

              </table>
            </div></div>
          <div className=" col-lg-3">
            <div className=" to-pay">
              <div className="order-summary">
                <h4>Order Summary</h4>
              </div>
              <div className="cart-body">
                <div className="col-f">
                  <h6>Subtotal</h6>
                  <h6 id="subtotal">0$</h6>
                </div>
                <div className="col-f">
                  <h6>Shipping</h6>
                  <h6>0$</h6>
                </div>
              </div>
              <div className="checkout">
                <div className="col-f">
                  <h5>Total</h5>
                  <h5 id="total">0$</h5>
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
