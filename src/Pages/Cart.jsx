
import {
  useDispatch,
  useSelector,
  Breadcrum,
  FontAwesomeIcon,
  Hero,
  Link,
  addToCart,
  decreaseCart,
  removeFromCart,
  useState,

} from "../Constants";
import { Form } from 'react-bootstrap';
import Accordion from "react-bootstrap/Accordion";
const Cart = () => {
  const [selectedOption, setSelectedOption] = useState(null);
const [shipping,setShipping]=useState(0)
  const handleCheckboxChange = (event, key) => {
    const isChecked = event.target.checked;

    setSelectedOption(isChecked ? key : null);

    // Log the value to the console when the checkbox is checked
    if (isChecked) {
      console.log(`Checkbox with value ${event.target.value} is checked`);
  setShipping(event.target.value);
    }
    else{setShipping(0);}
  
  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  return (
    <>
      <Hero />
      <div className="container">
        <div className="pt-4">
          {" "}
          <Breadcrum Category={"Home"} SubCategory={"Shop"} Data={"Cart"} />
        </div>

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
                {cart.cartItems.length === 0 ? (
                  <tfoot>
                    <tr>
                      <td
                        colSpan="6"
                        style={{ border: "none", paddingTop: "50px" }}
                      >
                        <h2>No Items In The Cart</h2>
                        <Link className=" empty" to="/Products">
                          {" "}
                          Continue Shopping{" "}
                        </Link>
                      </td>
                    </tr>
                  </tfoot>
                ) : (
                  <tbody>
                    {cart.cartItems?.map((cartItem) => (
                      <tr key={cartItem.id}>
                        <td style={{ borderRight: "1px solid #fff" }}>
                          <img
                            style={{ width: "70px" }}
                            src={cartItem.image}
                            alt={cartItem.name}
                          />
                        </td>
                        <td>{cartItem.name}</td>
                        <td>{cartItem.price}</td>
                        <td>
                          <div className="input-group">
                            <button
                              className="btn mi-btn"
                              onClick={() => handleDecreaseCart(cartItem)}
                            >
                              <FontAwesomeIcon icon="fa fa-minus" />
                            </button>
                            <div type="text" className="form-control">
                              {" "}
                              {cartItem.cartQuantity}{" "}
                            </div>
                            <button
                              className="btn pl-btn"
                              onClick={() => handleIncreaseCart(cartItem)}
                            >
                              <FontAwesomeIcon icon="fa fa-plus" />
                            </button>
                          </div>
                        </td>
                        <td>{cartItem.price * cartItem.cartQuantity}</td>
                        <td>
                          <button
                            className="btn ti-btn"
                            onClick={() => handleRemoveFromCart(cartItem)}
                          >
                            <FontAwesomeIcon icon="fa fa-times" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
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
                  <h6>{shipping}$</h6>
                </div>
                <div className="col-f">
                  <h6>Discount</h6>
                  <h6>0$</h6>
                </div>
              </div>
              <div className="checkout">
                <div className="col-f">
                  <h5>Total</h5>
                  <h5 id="total">{cart.cartTotalAmount+ + shipping}$</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="row mb-5 mt-2"
          style={{ border: "solid 1px #e6e6e6" }}
        >
          <br />
          <div dir="rtl" className="col-md-6 ">
            <h4 className="head">وسيلة الشحن :</h4>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header >
                  <div className="bef befp">+</div>
                  <div className="bef befm">-</div>
                  استلام من معرض الشركة
                </Accordion.Header>
                <Accordion.Body>
                  بواسطة هذه الخدمة تستطيع استلام طلبك من معرض الشركة فور تثبيت
                  الطلب دون اي تكاليف اضافية
                  <input className="custom"
                type="checkbox"
                name="shippingOption"
                value={0}
                checked={selectedOption === "1"}
                onChange={(e) => handleCheckboxChange(e, "1")}
              />
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header >
                  <div className="bef befp">+</div>
                  <div className="bef befm">-</div>
                  شحن داخل مدينة نابلس
                </Accordion.Header>
                <Accordion.Body>
                  التوصيل من خلال الدراجات النارية.
                  <br />رسوم الشحن من 10 الى 15 شيكل
                  <input className="custom"
                  type="checkbox"
                  name="shippingOption"
                  value={15}
                  checked={selectedOption === "2"}
                  onChange={(e) => handleCheckboxChange(e, "2")}
                />
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header >
                  <div className="bef befp">+</div>
                  <div className="bef befm">-</div>
                  شحن الى مدن و قرى الضفة
                </Accordion.Header>
                <Accordion.Body>
                  التوصيل من خلال شركة التوصيل  تورنيدو.
                  <br />رسوم الشحن 20 شيكل
                  <input className="custom"
                  type="checkbox"
                  name="shippingOption"
                  value={20}
                  checked={selectedOption === "3"}
                  onChange={(e) => handleCheckboxChange(e, "3")}
                />
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header >
                  <div className="bef befp">+</div>
                  <div className="bef befm">-</div>
                  شحن الى الداخل المحتل
                </Accordion.Header>
                <Accordion.Body>
                  التوصيل من خلال شركة التوصيل  تورنيدو.
                  <br />رسوم الشحن 30 شيكل
                  <input
                  type="checkbox" className="custom"
                  name="shippingOption"
                  value={30}
                  checked={selectedOption === "4"}
                  onChange={(e) => handleCheckboxChange(e, "4")}/>
                  </Accordion.Body>              
                </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header >
                  <div className="bef befp">+</div>
                  <div className="bef befm">-</div>
                  شحن الى القدس وضواحيها
                </Accordion.Header>
                <Accordion.Body>
                  التوصيل من خلال شركة التوصيل  تورنيدو.
                  <br />رسوم الشحن 70 شيكل
                  <input className="custom"
                  type="checkbox"
                  name="shippingOption"
                  value={70}
                  checked={selectedOption === "5"}
                  onChange={(e) => handleCheckboxChange(e, "5")}/>
                  </Accordion.Body>    </Accordion.Item>
            </Accordion>
          </div>
          <div dir="rtl" className="col-md-6 form-cart">
            <h4 className="head"> المعلومات الشخصية :</h4>
            <Form className="fieldset">
              <Form.Group className="group">
                <FontAwesomeIcon icon="fa-user" />
                <Form.Control placeholder="الاسم" type="text" name="name" />
              </Form.Group>
              <Form.Group className="group">
                <FontAwesomeIcon icon="fa-envelope" />
                <Form.Control placeholder="الايميل" type="email" name="email" />
              </Form.Group>
              <Form.Group className="group">
                <FontAwesomeIcon icon="fa-phone" />
                <Form.Control dir="rtl" placeholder="رقم الهاتف" type="tel" name="phone" />
              </Form.Group>
              <Form.Group className="group">
                <FontAwesomeIcon icon="fa-location" />
                <Form.Control placeholder="العنوان بالتفصيل" type="address" name="notes" />
              </Form.Group>
              <button className='submit my-2' type="submit" id="register">
                تثبيت الطلب
              </button>
            </Form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
