import NavbarHeader from './Components/NavbarHeader/Navbar.jsx';
import Footer from './Components/Footer/Footer';
import Register from './Pages/Register';
import Products from './Pages/Products.jsx';
import Services from './Pages/Services';
import Error404 from './Pages/Error404';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect,useRef } from 'react';
import logoImage from "./assets/logo.png";
import h1 from './assets/h1.jpg';
import h2 from './assets/h2.jpg';
import h3 from './assets/h3.jpg';
import h4 from './assets/h4.jpg';
import h5 from './assets/h5.jpg';


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
  { src: h4, alt: 'Image 4', caption: 'fourth image' },
  { src: h5, alt: 'Image 5', caption: 'fifth image' },
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

const products = [
  {
    id: 1,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },
  {
    id: 2,
    name: "MacBook Air ",
    price: 4999.00,
    image: logoImage,
  },  {
    id: 3,
    name: "MacBook Air Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },
  {
    id: 4,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },
  {
    id: 5,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },  {
    id: 6,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },
  {
    id: 7,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },
  {
    id: 8,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },  {
    id: 9,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },
  {
    id: 10,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },
  {
    id: 11,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },  {
    id: 12,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },
  {
    id: 13,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },
  {
    id: 14,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },  {
    id: 15,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },
  {
    id: 16,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image :logoImage,
  },
  {
    id: 17,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },  {
    id: 18,
    name: "MacBook Air 13.6\" M2 (8-CPU Core/ 8-GPU Core)",
    price: 4999.00,
    image: logoImage,
  },
];
export {useRef,categories,products, FontAwesomeIcon, contactInfo, NavLink, Link, routes, navLinks, CarouselImages, logoImage, useState, useEffect, Footer, NavbarHeader, Register }