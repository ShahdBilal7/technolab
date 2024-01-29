import { FontAwesomeIcon, useState, useDispatch, addToCart, Link ,Alert} from "../../Constants";
import LoginModal from "../LoginModal/LoginModal";
import "./DetailCard.css";
const DetailCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <div className="details ">
      <h1 className="title">{product.name}</h1>
      <div className="Category"><strong>Category: </strong> {product.category}</div>
      <div className="price">
        <h6 className="d-inline-block mb-0 text-primary">
          {product.onSale ? (
            <span>
              <del style={{ color: "gray" }}>{product.price.toFixed(2)}₪</del>
              <span className="p-3" style={{ color: "#000", fontSize: "20px", }}>{product.salePrice.toFixed(2)}₪</span>
            </span>
          ) : (
            <span style={{ color: "#000", fontSize: "18px", }}>{product.price.toFixed(2)}₪</span>
          )}
        </h6>
      </div>
      <div className="productQuantityDiscounts">
        <table className="quantityDiscount">
          <tbody><tr>
            <th className="discount-header">Qty</th>
            <th className="discount-header">Discount</th>
          </tr>
            <tr className="discount-row">
              <td>1-9</td>
              <td>$4.95</td>
            </tr>
            <tr className="discount-row">
              <td>10-99</td>
              <td>$4.46</td>
            </tr>
            <tr className="discount-row">
              <td>100+</td>
              <td>$3.96</td>
            </tr>
          </tbody>
        </table>
      </div>
      {
        product.isRetired ?
          <Alert variant="danger" >
            <Alert.Heading>
              <FontAwesomeIcon className="mx-2" icon="fa-solid fa-circle-exclamation" />
              Retired Product
            </Alert.Heading>
            <p className="mb-0">
              This product has been retired from our catalog and is no longer for sale. This page is made available for those looking for datasheets and the simply curious.
            </p>
          </Alert>
          : product.quantity === 0 ?
            <Alert variant="warning">
              <FontAwesomeIcon className="mx-2" icon="fa-clock" />
              <span className="mb-0">
                We expect this product will be available on {product.AvailableDate + "  "}
                <Link onClick={() => setShowLoginModal(true)} title="Receive an email when this product returns to stock." className="notify-link">  Notify Me</Link>
              </span>
              <LoginModal show={showLoginModal}
                handleClose={() => setShowLoginModal(false)}
                describe="In order to be notified when this item becomes available, you need to log in to your account."
              />
            </Alert>
            :
            <div className="buttons">
              <button className="add-to-cart" onClick={() =>dispatch(addToCart(product))}>
                <FontAwesomeIcon icon="fa fa-shopping-cart" />
                add to cart
              </button>
            </div>
      }

    </div>
  )
}

export default DetailCard
