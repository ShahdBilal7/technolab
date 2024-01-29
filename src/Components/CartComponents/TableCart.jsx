import { useSelector, useDispatch,Link,ChangeQuantityCart, removeFromCart } from "../../Constants";

const TableCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div id="cart-info" className="cart-info">
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
          <tbody>
            <tr>
              <td colSpan="6" style={{ border: "none", paddingTop: "50px" }}>
                <h2>No Items In The Cart</h2>
                <Link className="empty" to="/Products">
                  Continue Shopping
                </Link>
              </td>
            </tr>
          </tbody>
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
                <td>{cartItem.price}₪</td>
                <td>
                  <input
                    className="quantity-group"
                    min={1}
                    max={cartItem.quantity}
                    value={cartItem.cartQuantity}
                    onChange={(e) =>
                      dispatch(
                        ChangeQuantityCart({
                          id: cartItem.id,
                          newQuantity: +e.target.value,
                        })
                      )
                    }
                    type="number"
                  />
                </td>
                <td>{cartItem.price * cartItem.cartQuantity}₪</td>
                <td>
                  <button
                    className="btn-remove"
                    onClick={() => dispatch(removeFromCart(cartItem))}
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
  );
};

export default TableCart;
