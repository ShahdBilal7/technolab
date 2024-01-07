import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Error404 from './Pages/Error404';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    
      <BrowserRouter basename="/technolab">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop' element={<Shop />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
  

  );
}

export default App;
