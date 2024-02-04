import { OverlayTrigger, Tooltip,useSelector,isLoginUser,user, FontAwesomeIcon, Link, addToCart, useDispatch, openStateModal, openLoginModal,setDescribe } from "../../Constants";
import CountDown from "./CountDown";
import StateQuantity from "./stateQuantity";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => dispatch(addToCart(product));
  const handleOpenLoginModal=()=>{
    dispatch(setDescribe("In order to be notified when this item becomes available, you need to log in to your account."));
    dispatch(openLoginModal());
  }

  const isLogin = useSelector(isLoginUser);
  const userInfo = useSelector(user);
  const { id, name, price, salePrice,restricted, image, onSale, quantity,NotAva, onNew, isRetired, saleDate, AvailableDate } = product;
  return (
    <div key={id} className="product-card card h-100 text-center rounded-0" style={isRetired ? { opacity: 0.5 } : {}}>
      <Link to={`/detail/${id}`}>
        <div className="product-image d-flex align-items-center">
          <img alt="product" src={image} />
          <div className="labels ">
          {onSale && <div className="label sale">ON SALE</div>}
          {onNew && <div className="label new">New</div>}
          {quantity === 0 && <div className="label oos">Out of stock</div>}
          {isRetired && <div className="label retired">Retired</div>}
          {restricted && <div className="label restricted">Restricted</div>}
          </div>
        
        </div>
      </Link>
      {onSale && <CountDown color="#b71540" title={`sale end at ${saleDate}`} futureDate={new Date(saleDate) - (2 * 60 * 60 * 1000)} completionMessage="Sale End!" />}
      {NotAva === 0 ? <CountDown color="#A1C542" title={`product available at ${AvailableDate}`} futureDate={new Date(AvailableDate) - (2 * 60 * 60 * 1000)} completionMessage="product Now Available" /> : <span></span>}
      <div className="border-top card-body p-0">
        <div className="py-2">
          <Link to={`/detail/${id}`}>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="button-tooltip-2">{name}</Tooltip>}>
              <h6 className="product-name">{name}</h6>
            </OverlayTrigger>
          </Link>
          <StateQuantity product={product} />
{
          // <h6 className="d-inline-block mb-0 text-primary">
          //   {onSale ? <span>
          //     <del style={{ color: "gray", fontSize: "16px" }}>{price.toFixed(2)}₪</del>
          //     <span className="p-3" style={{ color: "#000" }}>{salePrice.toFixed(2)}₪</span>
          //   </span>
          //     : <span className="p-3" style={{ color: "#000" }}>{price.toFixed(2)}₪</span>
          //   }
          // </h6>
}
      {(price || salePrice) && (
        <div className="d-flex justify-content-center gap-3">
          {price && (
            <span
              className={`price-text me-2 ${
                salePrice ? "discount-price" : "original-price"
              }`}
            >
              {price}₪
            </span>
          )}
          {salePrice && (
            <span className="price-text original-price">
              {salePrice}₪
            </span>
          )}
          </div>
      )}
      {isLogin && userInfo.roles[0] !== "ROLE_CUSTOMER" && 
      <div className="border-top mt-2 pt-2">
          <h6  style={{ color: "#777"}}> total quantity: {quantity} </h6>
          <h6  style={{ color: "#888"}}> position: {"1k 2A"} </h6>
          </div>  
        }
        </div>
        <div className="border-top">
          <div className="row m-0 align-items-center">
            {
              isRetired ? <strong onClick={() => dispatch(openStateModal())} className="col border-right icon-card">Retired</strong>
                : quantity === 0 ?
                  <div onClick={handleOpenLoginModal} title="Receive an email when this product returns to stock." className=' col border-right icon-card' >
                    <div  className="ic" ><FontAwesomeIcon icon="fa-bell" /></div>
                    <h6 className="tex">Notify me</h6>
                  </div>
                  :
                  <Link className='col  border-right icon-card' onClick={() => handleAddToCart(product)}>
                    <div className="ic" ><FontAwesomeIcon icon="fa-shopping-cart" /></div>
                    <h6 className="tex">To cart</h6>
                  </Link>
            }
            {isLogin && userInfo.roles[0] !== "ROLE_CUSTOMER" && 
            <Link className=' col border-right icon-card' to={`/updateItem/${id}`}>
            <div className="ic" >
              <FontAwesomeIcon icon="fa-edit" /></div>
            <h6 className="tex">edit</h6>
          </Link>
        }
            <Link className=' col border-right icon-card' to={`/detail/${id}`}>
              <div className="ic" >
                <FontAwesomeIcon icon="fa-eye" /></div>
              <h6 className="tex">View</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductCard
