import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Error404 from './Pages/Error404';
import Footer from './Components/Footer/Footer';
import Register from './Pages/Register';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
      <BrowserRouter basename="/technolab">
      <ScrollToTop smooth  />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/register' element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  

  );
}

export default App;
