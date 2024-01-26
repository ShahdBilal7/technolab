import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (action.payload.isRetired || action.payload.quantity === 0) {
        toast.error(`This Product is Not Available Now`, {
          position: "top-right",
        })
      }

      else if (existingIndex >= 0) {

        if (state.cartItems[existingIndex].cartQuantity >= action.payload.quantity) {
          toast.error(`عذرا... الكمية المطلوبة غير متوفرة في المتجر حاليا`, {
            position: "top-right",
          })
        }
        else {
          state.cartItems[existingIndex] = {
            ...state.cartItems[existingIndex],
            cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
          };

          toast.info(`Increased product quantity`, {
            position: "top-right",
            autoClose: 1000
          })
        }

      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);

        toast.success(` added ${action.payload.name} to your cart  `, {
          position: "top-right",
          // autoClose:1000
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "top-right",
          // autoClose:1000
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error(`${action.payload.name} removed from cart`, {
          position: "top-right",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    ChangeQuantityCart(state, action) {
      const { id, newQuantity } = action.payload;

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (itemIndex !== -1 && newQuantity > 0 && newQuantity <= state.cartItems[itemIndex].quantity) {
        // Update the cart quantity for the specified item
        state.cartItems[itemIndex].cartQuantity = newQuantity;

        // Update localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        // toast.info(`Changed product quantity to ${newQuantity}`, {
        //   position: "top-right",
        //   // autoClose:1000
        // });
      }

    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error(`${action.payload.name} removed from cart`, {
            position: "top-right",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "top-right" });
    },
  },
});

export const { ChangeQuantityCart, addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;