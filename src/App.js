import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './Components/SearchHeader/Search.jsx';
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon, routes, navLinks, Footer, NavbarHeader, Register } from "./Constants.js";

function App() {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <BrowserRouter basename="/technolab">
      <ScrollToTop smooth component={<FontAwesomeIcon icon="fa-solid fa-chevron-up" />} />
      <NavbarHeader />
      {showSearch && <Search />}
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        {navLinks.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route
          path='/register'
          element={<Register setShowSearch={setShowSearch} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
