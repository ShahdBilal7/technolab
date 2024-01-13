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
      <ScrollToTop smooth width='16' height='16' viewBox="0 0 512 512" svgPath="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
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
