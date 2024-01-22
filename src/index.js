import ReactDOM from 'react-dom/client';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './Pages/Pages.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { getTotals } from './features/cartSlice';
import React from 'react';
import {StrictMode} from 'react';

const root = ReactDOM.createRoot(document.getElementById("root"));
const store=configureStore({
  reducer:{
    cart:cartReducer,
  }
})
store.dispatch(getTotals());
root.render(
  <StrictMode><Provider store={store}>
<App/>
</Provider>
  </StrictMode>

);
library.add(fas,fab);


