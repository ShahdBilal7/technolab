import "./DetailCard.css";
import { FontAwesomeIcon,useState} from "../../Constants";
const DetailCard = ({product}) => {
  const [quant, setQuant] = useState(0);

  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };

  return (
    <div className="details ">
    <h1 className="title">{product.name}</h1>
    <div className="Category">Category: {product.category}</div>
    <div className="price">
      <h6 className="d-inline-block mb-0 text-primary">
        {product.onSale ? (
          <>
            <del style={{ color: "gray" }}>{product.price.toFixed(2)}₪</del>
            <span className="p-3" style={{ color: "#000", fontSize: "20px", }}>{product.salePrice.toFixed(2)}₪</span>
          </>
        ) : (
          <span>{product.price.toFixed(2)}₪</span>
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
    <div className="buttons">
      <div className="amount">
        <button className="minus" onClick={removeQuant} disabled={quant === 0}>
          <FontAwesomeIcon icon="fa fa-minus" />
        </button>
        <p>{quant}</p>
        <button className="plus" onClick={addQuant} disabled={quant === 100}>
          <FontAwesomeIcon icon="fa fa-plus" />
        </button>
      </div>
      <button
        className="add-to-cart"
      >
        <FontAwesomeIcon icon="fa fa-shopping-cart" />
        add to cart
      </button>
    </div>
  </div>
  )
}

export default DetailCard
