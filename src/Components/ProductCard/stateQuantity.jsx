import { out, inn, retired, few, useDispatch, openStateModal } from "../../Constants";
const StateQuantity = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="state" title={product.isRetired ? "retired" : product.quantity === 0 ? "out of stock" : product.quantity <= 35 ? `few in stock` : "in stock"}>
      <div onClick={() => dispatch(openStateModal())} className={`stock ${product.isRetired ? "retired" : product.quantity === 0 ? "outStock" : product.quantity <= 35 ? "fewInStock" : "inStock"}`}>
        <img className="quantity" src={
          product.isRetired ? retired :
            product.quantity === 0 ? out :
              product.quantity <= 35 ? few : inn} alt="quantity" />
      </div>
      <span>{product.category}</span>
    </div>
  );
};

export default StateQuantity;
