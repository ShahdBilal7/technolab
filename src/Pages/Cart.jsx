import {
  useDispatch,
  useSelector,
  Breadcrumb,
  FontAwesomeIcon,
  Link,
  ChangeQuantityCart,
  removeFromCart,
  useState,

} from "../Constants";
import { useFormik } from "formik";
import domtoimage from 'dom-to-image';
import * as Yup from "yup";
import { Form, Modal } from 'react-bootstrap';
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
      setShipping(event.target.value);
    }
    else { setShipping(0);

    }

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
      phone: Yup.string().matches(/^[0-9]{10}$/, "Invalid phone number").required("Required"),
      address: Yup.string().required("Required"),
      address2: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setShowOrderModal(true);
    },
  });

  const takeImage = () => {
    const captureElement = document.querySelector("#capture");

    if (!captureElement) {
      console.error("Element with ID 'capture' not found");
      return;
    }

    domtoimage.toPng(captureElement)
      .then((dataUrl) => {
        // Create a download link
        const downloadLink = document.createElement("a");
        downloadLink.href = dataUrl;
        downloadLink.download = "image.png";

        // Append the download link to the document
        document.body.appendChild(downloadLink);

        // Trigger the click event on the download link
        downloadLink.click();

        // Remove the download link from the document
        document.body.removeChild(downloadLink);
      })
      .catch(error => {
        console.error("Error capturing image:", error);
      });
  };


  return (

    <div className="container">
      <div className="pt-4 cart-head">
        <Breadcrumb Category="Home" CategoryLink="/" SubCategory="Shop" SubCategoryLink="/products" Data="Cart" />
        <div>
          <FontAwesomeIcon className="csv" onClick={takeImage} title="Take a screenshot of my cart information." icon="fa-solid fa-camera-retro" />
          <FontAwesomeIcon className="csv" onClick={onExportLocal} title="CSV version of your cart (for import into Excel, etc.)" icon="fa-solid fa-file-csv" />
        </div>
      </div>
      <section id="capture" className="cart row " >
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
                <tbody >
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
              <Form.Control placeholder="الاسم"
               type="text" name="name"  onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name} />

            </Form.Group>
            <Form.Text className="text-danger mb-3">
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-danger">* {formik.errors.name}</div>
                    ) : null}
                  </Form.Text>
            <Form.Group className="group">
              <FontAwesomeIcon icon="fa-envelope" />
              <Form.Control placeholder="الايميل" 
              type="email" name="email"  onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} />

            </Form.Group>
            <Form.Text className="text-danger mb-3">
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">* {formik.errors.email}</div>
            ) : null}
          </Form.Text>
            <Form.Group className="group">
              <FontAwesomeIcon icon="fa-phone" />
              <Form.Control dir="ltr" placeholder="05XXXXXXXX" type="tel"  name="phone" onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone} />

            </Form.Group>
            <Form.Text className="text-danger mb-3">
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-danger">* {formik.errors.phone}</div>
            ) : null}
          </Form.Text>
            <div className="row">
              <div className="col-md-6 mb-3">
                <Form.Group className="group ">
                  <FontAwesomeIcon icon="fa-location" />
                  <Form.Control placeholder="المحافظة " type="address"  name="address" onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address} />
                </Form.Group>
                <Form.Text className="text-danger mb-3">
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-danger">* {formik.errors.address}</div>
                ) : null}
              </Form.Text>
              </div>
              <div className="col-md-6">
                <Form.Group className="group">
                  <FontAwesomeIcon icon="fa-location" />
                  <Form.Control placeholder="القرية / المخيم/ الحي " type="address" name="address2" onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address2} />
                </Form.Group>
                <Form.Text className="text-danger ">
                {formik.touched.address2 && formik.errors.address2 ? (
                  <div className="text-danger">* {formik.errors.address2}</div>
                ) : null}
              </Form.Text>
              </div>



            </div>

            <button className='submit my-2' type="submit" id="register">
              تثبيت الطلب
            </button>
            <Modal dir="rtl"  show={showOrderModal} onHide={() => setShowOrderModal(false)} centered>
              <Modal.Header closeButton>
                <h1 style={{flex:"1"}}>تأكيد الطلب</h1>
              </Modal.Header>
              <Modal.Body>
                <p>الإسم: &nbsp; {formik.values.name}</p>
                <p>رقم الجوال : &nbsp;{formik.values.phone}</p>
                <p>الايميل الخاص بك : &nbsp;{formik.values.email}</p>
                <p>العنوان : &nbsp;{formik.values.address + "/" + formik.values.address2}</p>
                <hr />
                <strong>وسيلة الشحن : {(() => {
                  switch (selectedOption) {
                    case "2":
                      return "شحن داخل مدينة نابلس";
                    case "3":
                      return " شحن الى محافظات الضفة الاخرى من خلال شركة تورنيدو للتوصيل";
                    case "4":
                      return " شحن الى الداخل المحتل من خلال شركة تورنيدو للتوصيل";
                    case "5":
                      return "شحن الى القدس وضواحيها من خلال شركة تورنيدو للتوصي";
                    default:
                      return "استلام من معرض الشركة";
                  }
                })()}</strong>
                
                <br/>
                
                <strong>المجموع النهائي = {cart.cartTotalAmount + + shipping}₪  </strong>
                <hr></hr>

                <p style={{ color: "#777" }}>عند تأكيد الطلب سيتم  إرسال ايميل يحتوي على تفاصيل طلبك والمعلومات التي تحتاجها </p>
            
<br/>

                <strong style={{ color: "red" }}>عند تأكيد الطلب لايمكن التراجع عن الطلب  !</strong>
                <br />
                <br />
                <div dir="rtl" className="d-flex justify-content-center" style={{fontSize:"14px"}}>
                <button className=' submit m-2  ' type="submit" id="register">
                  تأكيد الطلب <br/>
                   الدفع عند الإستلام
                </button>
                <button className='  submit m-2 p-3' type="submit" id="register">
                تأكيد الطلب <br/> الدفع
                 عن طريق حوالة بنكية
                </button>
              </div>

    
              </Modal.Body>
            </Modal>
          </Form>
        </div>
      </section>
    </div>

  );
};

export default Cart;
