import {
  useDispatch,
  useSelector,
  Breadcrumb,
  FontAwesomeIcon,
  Link,
  addToCart,
  decreaseCart,
  ChangeQuantityCart,
  removeFromCart,
  useState,
  useEffect,

} from "../Constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Modal, ModalFooter } from 'react-bootstrap';
import Accordion from "react-bootstrap/Accordion";
import exportFromJSON from 'export-from-json'
const Cart = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shipping, setShipping] = useState(0)
  const handleCheckboxChange = (event, key) => {
    const isChecked = event.target.checked;
    setSelectedOption(isChecked ? key : null);
    if (isChecked) {
      console.log(`Checkbox with value ${event.target.value} is checked`);
      setShipping(event.target.value);
    }
    else { setShipping(0); }

  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [quantities, setQuantities] = useState(
    cart.cartItems?.map((cartItem) => cartItem.cartQuantity)
  );
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
    setQuantities((prevQuantities) =>
      prevQuantities.filter((_, index) => index !== cart.cartItems.findIndex((item) => item.id === cartItem.id))
    );
  };
  const setValueAtIndex = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const handleChangeQuantity = (index, cartItem, newQuantity) => {
    const validatedQuantity = Math.max(1, Math.min(cartItem.quantity, parseInt(newQuantity, 10)) || 1);
    setValueAtIndex(index, validatedQuantity);
    dispatch(ChangeQuantityCart({ id: cartItem.id, newQuantity: validatedQuantity }));
  };

  // const handleIncreaseCart = (cartItem) => {
  //   dispatch(addToCart(cartItem));
  // };
  const onExportLocal = () => {
    const exportData = cart.cartItems.map(item => ({
      ProductName: item.name,
      Price: item.price,
      Quantity: item.cartQuantity,
      TotalPrice: item.price * item.cartQuantity,
    }));
    const fileName = 'myCart'
    const exportType = exportFromJSON.types.csv
    exportFromJSON({ data: exportData, fileName, exportType })
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      address2: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      address2: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setShowOrderModal(true);
    },
  });

  return (

    <div className="container">
      <div className="pt-4 cart-head">
        <Breadcrumb Category="Home" CategoryLink="/" SubCategory="Shop" SubCategoryLink="/products" Data="Cart" />
        <FontAwesomeIcon className="csv" onClick={onExportLocal} title="CSV version of your cart (for import into Excel, etc.)" icon="fa-solid fa-file-csv" />
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
                  {cart.cartItems?.map((cartItem, index) => (
                    <tr key={cartItem.id}>
                      <td style={{ borderRight: "1px solid #fff" }}>
                        <img
                          style={{ width: "70px" }}
                          src={cartItem.image}
                          alt={cartItem.name}
                        />
                      </td>
                      <td>{cartItem.name}</td>
                      <td>{cartItem.price}₪</td>
                      <td>

                        <input className="quantity-group"
                          min={1}
                          max={cartItem.quantity}
                          value={quantities[index]}
                          onChange={(e) => handleChangeQuantity(index, cartItem, e.target.value)}
                          type="number"
                        />

                      </td>
                      <td>{cartItem.price * cartItem.cartQuantity}₪</td>
                      <td>
                        <button
                          className="btn-remove"
                          onClick={() => handleRemoveFromCart(cartItem)}
                        >
                          REMOVE
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
              <h4>ملخص طلباتي</h4>
            </div>
            <div dir="rtl" className="cart-body">
              <div className="col-f">
                <h6>مجموع سعر القطع</h6>
                <h6 id="subtotal">{cart.cartTotalAmount}₪</h6>
              </div>
              <div className="col-f">
                <h6> رسوم الشحن</h6>
                <h6>{shipping}₪</h6>
              </div>
              <div className="col-f">
                <h6> خصم</h6>
                <h6>0₪</h6>
              </div>
            </div>
            <div dir="rtl" className="checkout">
              <div className="col-f">
                <h5>المجموع النهائي</h5>
                <h5 id="total">{cart.cartTotalAmount + + shipping}₪</h5>
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
                <input className="custom"
                  type="checkbox"
                  name="shippingOption"
                  value={0}
                  checked={selectedOption === "1"}
                  onChange={(e) => handleCheckboxChange(e, "1")}
                />
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
              <Accordion.Body>
                التوصيل من خلال الدراجات النارية.
                <br />
                <input className="custom"
                  type="checkbox"
                  name="shippingOption"
                  value={15}
                  checked={selectedOption === "2"}
                  onChange={(e) => handleCheckboxChange(e, "2")}
                />
                رسوم الشحن 15 شيكل

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header >
                <div className="bef befp">+</div>
                <div className="bef befm">-</div>
                شحن الى محافظات الضفة الاخرى
              </Accordion.Header>
              <Accordion.Body>
                التوصيل من خلال شركة تورنيدو للتوصيل  .
                <br />
                <input className="custom"
                  type="checkbox"
                  name="shippingOption"
                  value={20}
                  checked={selectedOption === "3"}
                  onChange={(e) => handleCheckboxChange(e, "3")}
                />
                رسوم الشحن 20 شيكل

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header >
                <div className="bef befp">+</div>
                <div className="bef befm">-</div>
                شحن الى الداخل المحتل
              </Accordion.Header>
              <Accordion.Body>
                التوصيل من خلال شركة تورنيدو للتوصيل  .
                <br />  <input
                  type="checkbox" className="custom"
                  name="shippingOption"
                  value={70}
                  checked={selectedOption === "4"}
                  onChange={(e) => handleCheckboxChange(e, "4")} />
                رسوم الشحن 70 شيكل

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header >
                <div className="bef befp">+</div>
                <div className="bef befm">-</div>
                شحن الى القدس وضواحيها
              </Accordion.Header>
              <Accordion.Body>
                التوصيل من خلال شركة تورنيدو للتوصيل  .
                <br />  <input className="custom"
                  type="checkbox"
                  name="shippingOption"
                  value={30}
                  checked={selectedOption === "5"}
                  onChange={(e) => handleCheckboxChange(e, "5")} />
                رسوم الشحن 30 شيكل

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div dir="rtl" className="col-md-6 form-cart">
          <h4 className="head"> المعلومات الشخصية :</h4>
          <Form onSubmit={formik.handleSubmit} className="fieldset">
            <Form.Group className="group">
              <FontAwesomeIcon icon="fa-user" />
              <Form.Control placeholder="الاسم" type="text" name="name" required onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name} />

            </Form.Group>
            <Form.Group className="group">
              <FontAwesomeIcon icon="fa-envelope" />
              <Form.Control placeholder="الايميل" type="email" name="email" required onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} />

            </Form.Group>
            <Form.Group className="group">
              <FontAwesomeIcon icon="fa-phone" />
              <Form.Control dir="ltr" placeholder="+9725XXXXXXXX" type="tel" required name="phone" onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone} />

            </Form.Group>
            <div className="row">
            <div className="col-md-6">
            <Form.Group className="group ">
            <FontAwesomeIcon icon="fa-location" />
            <Form.Control placeholder="المحافظة " type="address" required name="address" onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address} />
          </Form.Group>
            </div>
            <div className="col-md-6">
            <Form.Group className="group">
          <FontAwesomeIcon icon="fa-location" />
          <Form.Control placeholder="القرية / المخيم/ الحي " type="address" required name="address2" onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address2} />
        </Form.Group>
            </div>
          
        
            
            </div>
          
            <button className='submit my-2' type="submit" id="register">
              تثبيت الطلب
            </button>
            <Modal dir="ltr" style={{alignContent:"center"}} show={showOrderModal} onHide={() => setShowOrderModal(false)} centered>
              <Modal.Header closeButton>
                <h1>تأكيد الطلب</h1>
              </Modal.Header>
              <Modal.Body>
              <p>Your Name : &nbsp; {formik.values.name}</p>
              <p>Your Phone : &nbsp;{formik.values.phone}</p>
              <p>Your Email : &nbsp;{formik.values.email}</p>
              <p>Your Address : &nbsp;{formik.values.address + "/" + formik.values.address2}</p>
              <hr/>
              <strong>The Total Price = {cart.cartTotalAmount + + shipping}₪  </strong> 
              <hr></hr>
            
      
              <p style={{color:"red"}}>عند تأكيد الطلب لايمكن التراجع عن الطلب </p>
              <br/>
              <button className='submit my-2' >
              تأكيد الطلب
            </button>
            </Modal.Body>
            </Modal>
          </Form>
        </div>
      </section>
    </div>

  );
};

export default Cart;
