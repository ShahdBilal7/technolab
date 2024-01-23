
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
                  <h6>0$</h6>
                </div>
                <div className="col-f">
                  <h6>Discount</h6>
                  <h6>0$</h6>
                </div>
              </div>
              <div className="checkout">
                <div className="col-f">
                  <h5>Total</h5>
                  <h5 id="total">{cart.cartTotalAmount}$</h5>
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
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header >
                  <div className="bef befp">+</div>
                  <div className="bef befm">-</div>
                  شحن داخل مدينة نابلس
                </Accordion.Header>
                <Accordion.Body>توصيل داخل مدينة نابلس </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header >
                  <div className="bef befp">+</div>
                  <div className="bef befm">-</div>
                  شحن الى مدن و قرى الضفة
                </Accordion.Header>
                <Accordion.Body>توصيل الى ة</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header >
                  <div className="bef befp">+</div>
                  <div className="bef befm">-</div>
                  شحن الى الداخل المحتل
                </Accordion.Header>
                <Accordion.Body>شحن الى مدن الضفة</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header >
                  <div className="bef befp">+</div>
                  <div className="bef befm">-</div>
                  شحن الى القدس وضواحيها{" "}
                </Accordion.Header>
                <Accordion.Body>شحن الى مدن الضفة</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div dir="rtl" className="col-md-6 form-cart">
            <h4 className="head"> المعلومات الشخصية :</h4>
            <div className="fieldset">
              <Form>
                <Form.Group className="group">
                  <FontAwesomeIcon icon="fa-user"/>
                  <Form.Control placeholder="الاسم" type="text" name="name" />
                </Form.Group>
                <Form.Group className="group">
                  <FontAwesomeIcon icon="fa-envelope"/>
                  <Form.Control placeholder="الايميل" type="email" name="email" />
                </Form.Group>
                <Form.Group className="group">
                  <FontAwesomeIcon icon="fa-phone"/>
                  <Form.Control dir="rtl" placeholder="رقم الهاتف" type="tel" name="phone" />
                </Form.Group>
                <Form.Group className="group">
                  <FontAwesomeIcon icon="fa-location"/>
                  <Form.Control placeholder="العنوان بالتفصيل" type="address" name="notes" />
                </Form.Group>
                <Form.Group className="group">
                <Form.Control placeholder="ملاحظات .... " type="textarea" name="notes" />
              </Form.Group>
              </Form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
