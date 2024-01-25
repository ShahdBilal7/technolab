import { FontAwesomeIcon, Link, addToCart, useDispatch, useState, Modal, out, inn, retired, few } from "../../Constants";
import "./ProductCard.css";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
const ProductCard = ({ product, flagSale }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id, name, category, price, salePrice, image, onSale, quantity, onNew, isRetired } = product;
  return (
    <div key={id} className="product-card card h-100 text-center rounded-0">
      <Link to={`/detail/${id}`}>
        <div className="product-image d-flex align-items-center">
          <img alt="product" src={image} />
          {// <h6 className="review">Quick Review</h6>
          }
          {flagSale && onSale && <div className="sale">ON SALE</div>}
          {onNew && <div className="new">New</div>}
          {isRetired && <div className="out">Retired</div>}
        </div>
      </Link>
      <div className="border-top card-body p-0">

        <div className="px-3 py-3">
          <Link to={`/detail/${id}`}>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="button-tooltip-2">{name}</Tooltip>}>
              <h6 className="product-name">{name}</h6>
            </OverlayTrigger>
          </Link>

          <div className="state">
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="button-tooltip">{
                  isRetired ? "retired" :
                    quantity === 0 ? "out of stock" :
                      quantity <= 35 ? `only ${quantity} left` :
                        "in stock"

                }
                </Tooltip>}
            >
              <div onClick={handleShow} className={
                isRetired ? "stock retired" :
                  quantity === 0 ? "stock outStock" :
                    quantity <= 35 ? "stock fewInStock" :
                      "stock inStock"
              } >
                <img className="quantity" src={
                  isRetired ? retired :
                    quantity === 0 ? out :
                      quantity <= 35 ? few :
                        inn} alt="quantity" />

                {<div className="inner"></div>}
              </div>
            </OverlayTrigger>
            <span>{category}</span>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>What do the color bubbles mean?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul className="list-unstyled mod">
                <li><img className="quantity" src={out} alt="out of stock" /><span>An empty red circle denotes a product which is out of stock.</span></li>
                <li><img className="quantity" src={few} alt="few in stock" /> <span>A half-empty yellow circle denotes a product which has only 35 or fewer units left in stock.</span></li>
                <li><img className="quantity" src={inn} alt="in stock" /> <span>A full green circle denotes a product with more than 35 units in stock.</span></li>
                <li><img className="quantity" src={retired} alt="retired" /><span>A gray slashed-out circle denotes a product which is retired; we might have replaced it with a newer revision or might not carry the product anymore.</span></li>
              </ul>
            </Modal.Body>
          </Modal>

          <h6 className="d-inline-block mb-0 text-primary">
            {onSale ? (
              <>
                <del style={{ color: "gray", fontSize: "16px" }}>{price.toFixed(2)}₪</del>
                <span className="p-3" style={{ color: "#000" }}>{salePrice.toFixed(2)}₪</span>
              </>
            ) : (
              <span className="p-3" style={{ color: "#000" }}>{price.toFixed(2)}₪</span>
            )}

          </h6>
        </div>
        <div className="border-top">
          <div className="row m-0 align-items-center">
            <Link className='col  border-right icon-card' onClick={() => handleAddToCart(product)}>
              <div className="ic" >
                <FontAwesomeIcon icon="fa-shopping-cart" />
              </div>
              <h6 className="tex">To cart</h6>
            </Link>
            <Link className=' col border-right icon-card' to={`/detail/${id}`}>
              <div className="ic" >
                <FontAwesomeIcon icon="fa-eye" />
              </div>
              <h6 className="tex">View</h6>
            </Link>



            {  // <FontAwesomeIcon icon="fa-heart" className='link heart col py-3' />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
