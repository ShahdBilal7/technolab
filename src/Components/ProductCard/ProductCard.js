import { FontAwesomeIcon,Link } from "../../Constants";
import "./ProductCard.css";
import p1 from "../../assets/p1.jpg";
import { OverlayTrigger,Tooltip } from 'react-bootstrap';
const ProductCard = ({ product, flagSale }) => {
  const { id,name, price, salePrice, image, onSale } = product;
  return (
    <div className="product-card card h-100 text-center rounded-0">
      <div className="product-image d-flex align-items-center">
        <img alt="product" src={p1} />
        <h6 className="review">Quick Review</h6>
        {flagSale && onSale && <div className="sale">ON SALE</div>}
      </div>
      <div className="border-top card-body p-0">
        <div className="px-3 py-3">
        <Link to={`/product-details/${id}`}>
        <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">{name}</Tooltip>}>
            <h6 className="product-name">{name}</h6>
        </OverlayTrigger>
    </Link>
    
      {  
          // <div className="truncated-text mb-2" aria-describedby="button-tooltip-2">
          //   {id}{name}
          // </div>
        }
          <h6 className="d-inline-block mb-0 text-primary">
            {onSale ? (
              <>
                <del style={{ color: "gray" }}>₪&nbsp;{price.toFixed(2)}</del>
                <span className="p-3" style={{ fontSize: "18px", }}>₪&nbsp;{salePrice.toFixed(2)}</span>
              </>
            ) : (
              <span>₪&nbsp;{price.toFixed(2)}</span>
            )}
          </h6>
        </div>
        <div className="border-top">
          <div className="row">
            <FontAwesomeIcon icon="fa-eye" className='link col border-right py-3' />
            <FontAwesomeIcon icon="fa-shopping-cart" className='link col border-right py-3' />
            <FontAwesomeIcon icon="fa-heart" className='link heart col py-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
