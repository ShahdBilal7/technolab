import { out, inn, retired, few,useState } from "../../Constants";
import StateModal from "./StateModal";

const StateQuantity = ({ product }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="state" title={product.isRetired ? "retired" :  product.quantity === 0 ? "out of stock" :product.quantity <= 35 ? `few in stock` :"in stock"}>
      <div onClick={() => setShow(true)} className={`stock ${product.isRetired ? "retired" : product.quantity === 0 ? "outStock" : product.quantity <= 35 ? "fewInStock" : "inStock"}`}>
        <img className="quantity" src={
          product.isRetired ? retired :
          product.quantity === 0 ? out :
          product.quantity <= 35 ? few : inn} alt="quantity" />
      </div>
      <span>{product.category}</span>
      <StateModal show={show} handleClose={() => setShow(false)} />
    </div>
  );
};

export default StateQuantity;
