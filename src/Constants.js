import NavbarHeader from './Components/NavbarHeader/Navbar.jsx';
import Footer from './Components/Footer/Footer';
import Register from './Pages/Register';
import Products from './Pages/Product.jsx';
import Services from './Pages/Services';
import Error404 from './Pages/Error404';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoImage from "./assets/logo.png";
import h1 from './assets/h1.png';
import h2 from './assets/h2.jpg';
import h3 from './assets/h3.png';

const contactInfo = [
  {
    icon: "fa-phone",
    value: '09-2355329',
  },
  {
    icon: "fa-mobile",
    value: '(+972) 599 39 1395',
  },
  {
    icon: "fa-envelope",
    value: 'Technolab.Electronics @gmail.com',
  },
  {
    icon: "fa-location",
    value: 'Near "Jorf" Super Market, An Najah National University Street, Rafydia, Nablus, Palestine',
  },
];


const CarouselImages = [
  { src: h1, alt: 'Image 1', caption: 'First image' },
  { src: h2, alt: 'Image 2', caption: 'Second image' },
  { src: h3, alt: 'Image 3', caption: 'Third image' },
];


const routes = [
  { path: '/cart', element: <Cart /> },
  { path: '*', element: <Error404 /> },
];

const navLinks = [
  { path: '/', element: <Home />, label: "Home" },
  { path: '/about', element: <About />, label: "About" },
  { path: '/contact', element: <Contact />, label: "Contact" },
  { path: '/products', element: <Products />, label: "Products" },
  { path: '/services', element: <Services />, label: "Services" },
];

const categories = [
  {
    "name": "FEATURED",
    "subcategories": [
      "New Products",
      "Top Sellers",
      "Most Popular",
    ]
  },
  {
    "name": "E-TEXTILES",
    "subcategories": [
      "LilyPad",
      "Sewable Electronics",
      "Materials",
      "E-Textile Power",
      "E-Textile Kits",
      "all E-Textiles",
    ]
  },
  {
    "name": "BRANDS",
    "subcategories": [
      "SparkFun",
      "Arduino",
      "Raspberry Pi",
      "Qwiic",
      "MicroMod",
      "all Brands",
    ]
  },
  {
    "name": "TOOLS",
    "subcategories": [
      "3D Printing",
      "CNC",
      "Soldering",
      "Hand Tools",
      "Instruments",
      "all Tools",
    ]
  },
  {
    "name": "ROBOTICS",
    "subcategories": [
      "Actobotics",
      "Motors & Drivers",
      "Parts",
      "Hardware",
      "Robotics Kits",
      "all Robotics",
    ]
  },
  {
    "name": "DEVELOPMENT",
    "subcategories": [
      "Single Board Comp.",
      "Microcontrollers",
      "FPGA",
      "Prototyping Boards",
      "all Development",
    ]
  },
  {
    "name": "MISCELLANEOUS",
    "subcategories": [
      "All Kits",
      "Books",
      "Arts/Crafts Supplies",
      "SD Cards",
      "Swag",
      "all Misc",
    ]
  },
  
  {
    "name": "WIRELESS & IOT",
    "subcategories": [
      "Bluetooth",
      "WiFi",
      "Satellite",
      "GPS & GNSS",
      "Wireless Kits",
      "all Wireless/IOT",
    ]
  },
  {
    "name": "SENSORS",
    "subcategories": [
      "Movement",
      "Biometrics",
      "Imaging",
      "Environment",
      "Capacitive",
      "all Sensors",
    ]
  },
  {
    "name": "COMPONENTS",
    "subcategories": [
      "LED & Illumination",
      "Buttons & Switches",
      "LCDs & OLEDs",
      "Power",
      "Cables & Wire",
      "all Components",
    ]
  },
  {
    "name": "AUDIO",
    "subcategories": [
      "Audio Boards",
      "Audio Cables",
      "Speakers",
      "Audio Chips",
      "all Audio",
    ]
  },
];


export {categories, FontAwesomeIcon, contactInfo, NavLink, Link, routes, navLinks, CarouselImages, logoImage, useState, useEffect, Footer, NavbarHeader, Register }