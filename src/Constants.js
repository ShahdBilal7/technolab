import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// react
import { useState, useEffect, useRef} from "react";
// react-router-dom
import { Link,NavLink,useParams } from 'react-router-dom';
// formik
import * as Yup from "yup";
import { useFormik } from "formik";
// bootstrap
import { Form, Modal,Alert, Navbar, Nav, NavDropdown, Dropdown, DropdownButton  } from 'react-bootstrap';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// redux
import { useSelector,useDispatch } from "react-redux";
// cartSlice
 import {addToCart,setShipping,getTotals,removeFromCart,ChangeQuantityCart } from "./store/cartSlice.js";
//  modalSlice
 import {openStateModal,closeStateModal,showStateModal} from './store/modalSlice';
 import {openLoginModal,closeLoginModal,showLoginModal,setDescribe,describeLoginModal} from './store/modalSlice';
// searchSlice
import {setSearch,searchValue } from "./store/searchSlice.js";
//userSlice
import { isLoginUser, loginUser, setIsLogIn,user } from "./store/userSlice.js";
//  pages
import Products from './Pages/Products.jsx';
import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import Register from './Pages/Register.jsx';
import Error404 from './Pages/Error404.jsx';
import Cart from './Pages/Cart.jsx';
import Detail from './Pages/ProductDetail.jsx';
import UpdateItem from './Pages/UpdateItem.jsx';
import MyCartImage from './Pages/MyCartImage.jsx';
import AllItems from './Pages/AllItems.jsx';
import NewItem from './Pages/NewItem.jsx';
import Pos from './Pages/Pos.jsx';
import Transactions from './Pages/Transactions.jsx';
// components
import Hero from './Components/Hero/Hero.jsx';
import ElasticCarousel from "./Components/ElasticCarousel/ElasticCarousel.jsx";
import Breadcrumb from "./Components/Breadcrumb/Breadcrumb.jsx";
import ProductCard from './Components/ProductCard/ProductCard.jsx';
import Search from './Components/SearchHeader/Search.jsx';
import NavbarHeader from './Components/NavbarHeader/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
// Images
import logoImage from "./assets/logo.png";
import h1 from './assets/h1.jpg';
import h2 from './assets/h2.jpg';
import h3 from './assets/h3.jpg';
import h4 from './assets/h4.jpg';
import h5 from './assets/h5.jpg';
import p11 from './assets/p11.jpg';
import p12 from './assets/p12.jpg';
import p13 from './assets/p13.jpg';
import p14 from './assets/p14.jpg';

import pp1 from './assets/pp1.jpeg';
import pp3 from './assets/pp3.jpg';
import pp4 from './assets/pp4.jpg';
import pp5 from './assets/pp5.jpg';
import pp6 from './assets/pp6.jpeg';
import pp7 from './assets/pp7.jpg';
import pp8 from './assets/pp8.jpeg';
import pp9 from './assets/pp9.jpg';
import rr1 from './assets/rr1.jpg';
import rr2 from './assets/rr2.jpg';
import rr3 from './assets/rr3.jpg';
import rr4 from './assets/rr4.jpg';
import rr5 from './assets/rr5.jpg';

import out from './assets/out.png';
import inn from './assets/inn.png';
import few from './assets/few.png';
import retired from './assets/retired.png';

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

const navLinks = [
  { path: '/', element: <Home />, label: "Home" },
  { path: '/products', element: <Products />, label: "Products" },
  { path: '/about', element: <About />, label: "About" },
  { path: '/contact', element: <Contact />, label: "Contact" },
  { path: '/allItems', element: <AllItems />, label: "All Items" },
  { path: '/newItem', element: <NewItem />, label: "New Item" },
  { path: '/pos', element: <Pos />, label: "Pos" },
  { path: '/transactions', element: <Transactions />, label: "Transactions" },
  // { path: '/services', element: <Services />, label: "Services" },
];


const routes = [
  { path: '/cart', element: <Cart /> },
  { path: "/detail/:id", element: <Detail /> },
  { path: "/updateItem/:id", element: <UpdateItem /> },
  { path: "/MyCartImage/:dataUrl", element: <MyCartImage /> },
  { path: '*', element: <Error404 /> },
];

const categories = [
  {
    "name": "FEATURED",
    "subcategories": [
      "New Products",
      "Sale Products",
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
    id: 0,
    name: "Piiii",
    price: 7,
    image: pp1,
    onSale: true,
    restricted:true,
    saleDate:"2024-03-26T17:00:00",
    salePrice: 5,
    quantity: 5,
    detailImage: [p11, p12, p13, p14,
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    
    description: "<div><!--block-->This is the new Arduino Uno R3. In addition to all the features of the previous board, the Uno now uses an ATmega16U2 instead of the 8U2 found on the Uno (or the FTDI found on previous generations). This allows for faster transfer rates and more memory. No drivers needed for Linux or Mac (inf file for Windows is needed and included in the Arduino IDE), and the ability to have the Uno show up as a keyboard, mouse, joystick, etc.<br><br><\/div><div><!--block-->The Uno R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided from the board. The other is a not connected and is reserved for future purposes. The Uno R3 works with all existing shields but can adapt to new shields which use these additional pins.<br><br><\/div><div><!--block-->Arduino is an open-source physical computing platform based on a simple i\/o board and a development environment that implements the&nbsp;<a href=\"http:\/\/www.processing.org\/\">Processing<\/a>\/<a href=\"http:\/\/wiring.org.co\/\">Wiring<\/a>&nbsp;language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be downloaded for free (currently for Mac OS X, Windows, and Linux).<br><br><\/div><div><!--block--><strong>Note:<\/strong>&nbsp;The Arduino Uno R3 requires the&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino 1.0<\/a>&nbsp;drivers folder in order to install properly on some computers. We have tested and confirmed that the R3 can be programmed in older versions of the IDE. However, the first time using the R3 on a new computer, you will need to have Arduino 1.0 installed on that machine. If you are interested in reading more about the changes to the IDE, check out the official&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/ReleaseNotes\">Arduino 1.0 Release notes<\/a>!<br><br><\/div><div><!--block-->Not sure which Arduino or Arduino-compatible board is right for you? Check out our&nbsp;<a href=\"https:\/\/www.sparkfun.com\/arduino_guide\">Arduino Buying Guide<\/a>!<br><br><\/div><strong>Features:<br><\/strong><div><!--block-->\t<\/div><ul><li><!--block-->ATmega328 microcontroller\t<\/li><li><!--block-->Input voltage - 7-12V\t<\/li><li><!--block-->14 Digital I\/O Pins (6 PWM outputs)\t<\/li><li><!--block-->6 Analog Inputs\t<\/li><li><!--block-->32k Flash Memory\t<\/li><li><!--block-->16Mhz Clock Speed<\/li><\/ul><div><!--block--><strong>Documents:<\/strong><br><\/div><div><ul><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/Arduino_Uno_Rev3-schematic.pdf\">Schematic<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/arduino_Uno_Rev3-02-TH.zip\">Eagle Files<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/ArduinoBoardUno\">Product Page<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino IDE Download<\/a><\/li><\/ul>"

  },
  {
    id: 1,
    name: "0.5Ω Power Resistor 5W 0.5ohm",
    price: 50.00,
    image: pp1,
    onSale: true,
    saleDate:"2024-01-26T17:00:00",
    salePrice: 25.8,
    quantity: 40,
    detailImage: [p11, p12, p13, p14,
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    
    description: "<div></div>"

  },
  {
    id: 2,
    name: "0.5Ω Carbon Film Resistor 1/8W ±1%",
    price: 60.00,
    image: rr1,
    onSale: true,
    saleDate:"2024-02-26T17:00:00",
    salePrice: 30.8,
    quantity: 20,
    detailImage: [p11, p12, p13, p14,
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    description: "<div></div>"},
  {
    id: 3,
    name: "Power Resistor 5W 1ohm",
    price: 70.00,
    image: pp3,
    onSale: true,
    saleDate:"2024-01-29T17:00:00",
    onNew:true,
    salePrice: 30.8,
    quantity: 35,
    detailImage: [
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    description: "<div><!--block-->This is the new Arduino Uno R3. In addition to all the features of the previous board, the Uno now uses an ATmega16U2 instead of the 8U2 found on the Uno (or the FTDI found on previous generations). This allows for faster transfer rates and more memory. No drivers needed for Linux or Mac (inf file for Windows is needed and included in the Arduino IDE), and the ability to have the Uno show up as a keyboard, mouse, joystick, etc.<br><br><\/div><div><!--block-->The Uno R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided from the board. The other is a not connected and is reserved for future purposes. The Uno R3 works with all existing shields but can adapt to new shields which use these additional pins.<br><br><\/div><div><!--block-->Arduino is an open-source physical computing platform based on a simple i\/o board and a development environment that implements the&nbsp;<a href=\"http:\/\/www.processing.org\/\">Processing<\/a>\/<a href=\"http:\/\/wiring.org.co\/\">Wiring<\/a>&nbsp;language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be downloaded for free (currently for Mac OS X, Windows, and Linux).<br><br><\/div><div><!--block--><strong>Note:<\/strong>&nbsp;The Arduino Uno R3 requires the&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino 1.0<\/a>&nbsp;drivers folder in order to install properly on some computers. We have tested and confirmed that the R3 can be programmed in older versions of the IDE. However, the first time using the R3 on a new computer, you will need to have Arduino 1.0 installed on that machine. If you are interested in reading more about the changes to the IDE, check out the official&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/ReleaseNotes\">Arduino 1.0 Release notes<\/a>!<br><br><\/div><div><!--block-->Not sure which Arduino or Arduino-compatible board is right for you? Check out our&nbsp;<a href=\"https:\/\/www.sparkfun.com\/arduino_guide\">Arduino Buying Guide<\/a>!<br><br><\/div><strong>Features:<br><\/strong><div><!--block-->\t<\/div><ul><li><!--block-->ATmega328 microcontroller\t<\/li><li><!--block-->Input voltage - 7-12V\t<\/li><li><!--block-->14 Digital I\/O Pins (6 PWM outputs)\t<\/li><li><!--block-->6 Analog Inputs\t<\/li><li><!--block-->32k Flash Memory\t<\/li><li><!--block-->16Mhz Clock Speed<\/li><\/ul><div><!--block--><strong>Documents:<\/strong><br><\/div><div><ul><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/Arduino_Uno_Rev3-schematic.pdf\">Schematic<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/arduino_Uno_Rev3-02-TH.zip\">Eagle Files<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/ArduinoBoardUno\">Product Page<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino IDE Download<\/a><\/li><\/ul>"
  },
  {
    id: 4,
    name: "1.1Ω Carbon Film Resistor 1/8W ±1%",
    price: 60.00,
    image: rr2,
    onSale: true,
    saleDate:"2024-01-27T17:00:00",
    onMost: true,
    salePrice: 20.8,
    quantity: 10,
    detailImage: [p11, p12, p13, p14,
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    description: "<div><!--block-->This is the new Arduino Uno R3. In addition to all the features of the previous board, the Uno now uses an ATmega16U2 instead of the 8U2 found on the Uno (or the FTDI found on previous generations). This allows for faster transfer rates and more memory. No drivers needed for Linux or Mac (inf file for Windows is needed and included in the Arduino IDE), and the ability to have the Uno show up as a keyboard, mouse, joystick, etc.<br><br><\/div><div><!--block-->The Uno R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided from the board. The other is a not connected and is reserved for future purposes. The Uno R3 works with all existing shields but can adapt to new shields which use these additional pins.<br><br><\/div><div><!--block-->Arduino is an open-source physical computing platform based on a simple i\/o board and a development environment that implements the&nbsp;<a href=\"http:\/\/www.processing.org\/\">Processing<\/a>\/<a href=\"http:\/\/wiring.org.co\/\">Wiring<\/a>&nbsp;language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be downloaded for free (currently for Mac OS X, Windows, and Linux).<br><br><\/div><div><!--block--><strong>Note:<\/strong>&nbsp;The Arduino Uno R3 requires the&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino 1.0<\/a>&nbsp;drivers folder in order to install properly on some computers. We have tested and confirmed that the R3 can be programmed in older versions of the IDE. However, the first time using the R3 on a new computer, you will need to have Arduino 1.0 installed on that machine. If you are interested in reading more about the changes to the IDE, check out the official&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/ReleaseNotes\">Arduino 1.0 Release notes<\/a>!<br><br><\/div><div><!--block-->Not sure which Arduino or Arduino-compatible board is right for you? Check out our&nbsp;<a href=\"https:\/\/www.sparkfun.com\/arduino_guide\">Arduino Buying Guide<\/a>!<br><br><\/div><strong>Features:<br><\/strong><div><!--block-->\t<\/div><ul><li><!--block-->ATmega328 microcontroller\t<\/li><li><!--block-->Input voltage - 7-12V\t<\/li><li><!--block-->14 Digital I\/O Pins (6 PWM outputs)\t<\/li><li><!--block-->6 Analog Inputs\t<\/li><li><!--block-->32k Flash Memory\t<\/li><li><!--block-->16Mhz Clock Speed<\/li><\/ul><div><!--block--><strong>Documents:<\/strong><br><\/div><div><ul><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/Arduino_Uno_Rev3-schematic.pdf\">Schematic<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/arduino_Uno_Rev3-02-TH.zip\">Eagle Files<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/ArduinoBoardUno\">Product Page<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino IDE Download<\/a><\/li><\/ul>"
  },
  {
    id: 5,
    name: "Power Resistor 5W 3ohm",
    price: 90.00,
    image: pp4,
    onSale: true,
    saleDate:"2024-01-30T17:00:00",
    salePrice: 40.8,
    quantity: 60,
    detailImage: [p11, p12, p13, p14,
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    description: "<div><!--block-->This is the new Arduino Uno R3. In addition to all the features of the previous board, the Uno now uses an ATmega16U2 instead of the 8U2 found on the Uno (or the FTDI found on previous generations). This allows for faster transfer rates and more memory. No drivers needed for Linux or Mac (inf file for Windows is needed and included in the Arduino IDE), and the ability to have the Uno show up as a keyboard, mouse, joystick, etc.<br><br><\/div><div><!--block-->The Uno R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided from the board. The other is a not connected and is reserved for future purposes. The Uno R3 works with all existing shields but can adapt to new shields which use these additional pins.<br><br><\/div><div><!--block-->Arduino is an open-source physical computing platform based on a simple i\/o board and a development environment that implements the&nbsp;<a href=\"http:\/\/www.processing.org\/\">Processing<\/a>\/<a href=\"http:\/\/wiring.org.co\/\">Wiring<\/a>&nbsp;language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be downloaded for free (currently for Mac OS X, Windows, and Linux).<br><br><\/div><div><!--block--><strong>Note:<\/strong>&nbsp;The Arduino Uno R3 requires the&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino 1.0<\/a>&nbsp;drivers folder in order to install properly on some computers. We have tested and confirmed that the R3 can be programmed in older versions of the IDE. However, the first time using the R3 on a new computer, you will need to have Arduino 1.0 installed on that machine. If you are interested in reading more about the changes to the IDE, check out the official&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/ReleaseNotes\">Arduino 1.0 Release notes<\/a>!<br><br><\/div><div><!--block-->Not sure which Arduino or Arduino-compatible board is right for you? Check out our&nbsp;<a href=\"https:\/\/www.sparkfun.com\/arduino_guide\">Arduino Buying Guide<\/a>!<br><br><\/div><strong>Features:<br><\/strong><div><!--block-->\t<\/div><ul><li><!--block-->ATmega328 microcontroller\t<\/li><li><!--block-->Input voltage - 7-12V\t<\/li><li><!--block-->14 Digital I\/O Pins (6 PWM outputs)\t<\/li><li><!--block-->6 Analog Inputs\t<\/li><li><!--block-->32k Flash Memory\t<\/li><li><!--block-->16Mhz Clock Speed<\/li><\/ul><div><!--block--><strong>Documents:<\/strong><br><\/div><div><ul><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/Arduino_Uno_Rev3-schematic.pdf\">Schematic<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/arduino_Uno_Rev3-02-TH.zip\">Eagle Files<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/ArduinoBoardUno\">Product Page<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino IDE Download<\/a><\/li><\/ul>"
  },
  {
    id: 6,
    name: "1.5Ω Carbon Film Resistor 1/8W ±1%",
    price: 60.00,
    image: rr3,
    quantity: 0,
    NotAva: true,
    detailImage: [p11, p12, p13, p14,
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    description: "<div><!--block-->This is the new Arduino Uno R3. In addition to all the features of the previous board, the Uno now uses an ATmega16U2 instead of the 8U2 found on the Uno (or the FTDI found on previous generations). This allows for faster transfer rates and more memory. No drivers needed for Linux or Mac (inf file for Windows is needed and included in the Arduino IDE), and the ability to have the Uno show up as a keyboard, mouse, joystick, etc.<br><br><\/div><div><!--block-->The Uno R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided from the board. The other is a not connected and is reserved for future purposes. The Uno R3 works with all existing shields but can adapt to new shields which use these additional pins.<br><br><\/div><div><!--block-->Arduino is an open-source physical computing platform based on a simple i\/o board and a development environment that implements the&nbsp;<a href=\"http:\/\/www.processing.org\/\">Processing<\/a>\/<a href=\"http:\/\/wiring.org.co\/\">Wiring<\/a>&nbsp;language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be downloaded for free (currently for Mac OS X, Windows, and Linux).<br><br><\/div><div><!--block--><strong>Note:<\/strong>&nbsp;The Arduino Uno R3 requires the&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino 1.0<\/a>&nbsp;drivers folder in order to install properly on some computers. We have tested and confirmed that the R3 can be programmed in older versions of the IDE. However, the first time using the R3 on a new computer, you will need to have Arduino 1.0 installed on that machine. If you are interested in reading more about the changes to the IDE, check out the official&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/ReleaseNotes\">Arduino 1.0 Release notes<\/a>!<br><br><\/div><div><!--block-->Not sure which Arduino or Arduino-compatible board is right for you? Check out our&nbsp;<a href=\"https:\/\/www.sparkfun.com\/arduino_guide\">Arduino Buying Guide<\/a>!<br><br><\/div><strong>Features:<br><\/strong><div><!--block-->\t<\/div><ul><li><!--block-->ATmega328 microcontroller\t<\/li><li><!--block-->Input voltage - 7-12V\t<\/li><li><!--block-->14 Digital I\/O Pins (6 PWM outputs)\t<\/li><li><!--block-->6 Analog Inputs\t<\/li><li><!--block-->32k Flash Memory\t<\/li><li><!--block-->16Mhz Clock Speed<\/li><\/ul><div><!--block--><strong>Documents:<\/strong><br><\/div><div><ul><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/Arduino_Uno_Rev3-schematic.pdf\">Schematic<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/arduino_Uno_Rev3-02-TH.zip\">Eagle Files<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/ArduinoBoardUno\">Product Page<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino IDE Download<\/a><\/li><\/ul>"
  }, {
    id: 7,
    name: "Power Resistor 5W 5ohm",
    price: 20.00,
    image: pp5,
    onSale: true,
    saleDate:"2024-02-26T17:00:00",
    salePrice: 10.0,
    onNew: true,
    onMost: true,
    quantity: 10,

    detailImage: [p11, p12, p13, p14,
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    description: "<div><!--block-->This is the new Arduino Uno R3. In addition to all the features of the previous board, the Uno now uses an ATmega16U2 instead of the 8U2 found on the Uno (or the FTDI found on previous generations). This allows for faster transfer rates and more memory. No drivers needed for Linux or Mac (inf file for Windows is needed and included in the Arduino IDE), and the ability to have the Uno show up as a keyboard, mouse, joystick, etc.<br><br><\/div><div><!--block-->The Uno R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided from the board. The other is a not connected and is reserved for future purposes. The Uno R3 works with all existing shields but can adapt to new shields which use these additional pins.<br><br><\/div><div><!--block-->Arduino is an open-source physical computing platform based on a simple i\/o board and a development environment that implements the&nbsp;<a href=\"http:\/\/www.processing.org\/\">Processing<\/a>\/<a href=\"http:\/\/wiring.org.co\/\">Wiring<\/a>&nbsp;language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be downloaded for free (currently for Mac OS X, Windows, and Linux).<br><br><\/div><div><!--block--><strong>Note:<\/strong>&nbsp;The Arduino Uno R3 requires the&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino 1.0<\/a>&nbsp;drivers folder in order to install properly on some computers. We have tested and confirmed that the R3 can be programmed in older versions of the IDE. However, the first time using the R3 on a new computer, you will need to have Arduino 1.0 installed on that machine. If you are interested in reading more about the changes to the IDE, check out the official&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/ReleaseNotes\">Arduino 1.0 Release notes<\/a>!<br><br><\/div><div><!--block-->Not sure which Arduino or Arduino-compatible board is right for you? Check out our&nbsp;<a href=\"https:\/\/www.sparkfun.com\/arduino_guide\">Arduino Buying Guide<\/a>!<br><br><\/div><strong>Features:<br><\/strong><div><!--block-->\t<\/div><ul><li><!--block-->ATmega328 microcontroller\t<\/li><li><!--block-->Input voltage - 7-12V\t<\/li><li><!--block-->14 Digital I\/O Pins (6 PWM outputs)\t<\/li><li><!--block-->6 Analog Inputs\t<\/li><li><!--block-->32k Flash Memory\t<\/li><li><!--block-->16Mhz Clock Speed<\/li><\/ul><div><!--block--><strong>Documents:<\/strong><br><\/div><div><ul><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/Arduino_Uno_Rev3-schematic.pdf\">Schematic<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/arduino_Uno_Rev3-02-TH.zip\">Eagle Files<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/ArduinoBoardUno\">Product Page<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino IDE Download<\/a><\/li><\/ul>"
  },
  {
    id: 8,
    name: "2Ω Carbon Film Resistor 1/8W ±1%",
    price: 60.00,
    image: rr4,
    onNew: true,
    quantity: 30,
    onMost: true,
    detailImage: [p11, p12, p13, p14,
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    description: "<div><!--block-->This is the new Arduino Uno R3. In addition to all the features of the previous board, the Uno now uses an ATmega16U2 instead of the 8U2 found on the Uno (or the FTDI found on previous generations). This allows for faster transfer rates and more memory. No drivers needed for Linux or Mac (inf file for Windows is needed and included in the Arduino IDE), and the ability to have the Uno show up as a keyboard, mouse, joystick, etc.<br><br><\/div><div><!--block-->The Uno R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided from the board. The other is a not connected and is reserved for future purposes. The Uno R3 works with all existing shields but can adapt to new shields which use these additional pins.<br><br><\/div><div><!--block-->Arduino is an open-source physical computing platform based on a simple i\/o board and a development environment that implements the&nbsp;<a href=\"http:\/\/www.processing.org\/\">Processing<\/a>\/<a href=\"http:\/\/wiring.org.co\/\">Wiring<\/a>&nbsp;language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be downloaded for free (currently for Mac OS X, Windows, and Linux).<br><br><\/div><div><!--block--><strong>Note:<\/strong>&nbsp;The Arduino Uno R3 requires the&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino 1.0<\/a>&nbsp;drivers folder in order to install properly on some computers. We have tested and confirmed that the R3 can be programmed in older versions of the IDE. However, the first time using the R3 on a new computer, you will need to have Arduino 1.0 installed on that machine. If you are interested in reading more about the changes to the IDE, check out the official&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/ReleaseNotes\">Arduino 1.0 Release notes<\/a>!<br><br><\/div><div><!--block-->Not sure which Arduino or Arduino-compatible board is right for you? Check out our&nbsp;<a href=\"https:\/\/www.sparkfun.com\/arduino_guide\">Arduino Buying Guide<\/a>!<br><br><\/div><strong>Features:<br><\/strong><div><!--block-->\t<\/div><ul><li><!--block-->ATmega328 microcontroller\t<\/li><li><!--block-->Input voltage - 7-12V\t<\/li><li><!--block-->14 Digital I\/O Pins (6 PWM outputs)\t<\/li><li><!--block-->6 Analog Inputs\t<\/li><li><!--block-->32k Flash Memory\t<\/li><li><!--block-->16Mhz Clock Speed<\/li><\/ul><div><!--block--><strong>Documents:<\/strong><br><\/div><div><ul><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/Arduino_Uno_Rev3-schematic.pdf\">Schematic<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/arduino_Uno_Rev3-02-TH.zip\">Eagle Files<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/ArduinoBoardUno\">Product Page<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino IDE Download<\/a><\/li><\/ul>"
  },
  {
    id: 9,
    name: "Power Resistor 5W 10ohm",
    price: 25.00,
    image: pp6,
    quantity: 0,
    AvailableDate:"2024-02-28T17:00:00",
    onMost: true,
    salePrice: 13.0,
    detailImage: [p11, p12, p13, p14,
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    description: "<div><!--block-->This is the new Arduino Uno R3. In addition to all the features of the previous board, the Uno now uses an ATmega16U2 instead of the 8U2 found on the Uno (or the FTDI found on previous generations). This allows for faster transfer rates and more memory. No drivers needed for Linux or Mac (inf file for Windows is needed and included in the Arduino IDE), and the ability to have the Uno show up as a keyboard, mouse, joystick, etc.<br><br><\/div><div><!--block-->The Uno R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided from the board. The other is a not connected and is reserved for future purposes. The Uno R3 works with all existing shields but can adapt to new shields which use these additional pins.<br><br><\/div><div><!--block-->Arduino is an open-source physical computing platform based on a simple i\/o board and a development environment that implements the&nbsp;<a href=\"http:\/\/www.processing.org\/\">Processing<\/a>\/<a href=\"http:\/\/wiring.org.co\/\">Wiring<\/a>&nbsp;language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be downloaded for free (currently for Mac OS X, Windows, and Linux).<br><br><\/div><div><!--block--><strong>Note:<\/strong>&nbsp;The Arduino Uno R3 requires the&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino 1.0<\/a>&nbsp;drivers folder in order to install properly on some computers. We have tested and confirmed that the R3 can be programmed in older versions of the IDE. However, the first time using the R3 on a new computer, you will need to have Arduino 1.0 installed on that machine. If you are interested in reading more about the changes to the IDE, check out the official&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/ReleaseNotes\">Arduino 1.0 Release notes<\/a>!<br><br><\/div><div><!--block-->Not sure which Arduino or Arduino-compatible board is right for you? Check out our&nbsp;<a href=\"https:\/\/www.sparkfun.com\/arduino_guide\">Arduino Buying Guide<\/a>!<br><br><\/div><strong>Features:<br><\/strong><div><!--block-->\t<\/div><ul><li><!--block-->ATmega328 microcontroller\t<\/li><li><!--block-->Input voltage - 7-12V\t<\/li><li><!--block-->14 Digital I\/O Pins (6 PWM outputs)\t<\/li><li><!--block-->6 Analog Inputs\t<\/li><li><!--block-->32k Flash Memory\t<\/li><li><!--block-->16Mhz Clock Speed<\/li><\/ul><div><!--block--><strong>Documents:<\/strong><br><\/div><div><ul><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/Arduino_Uno_Rev3-schematic.pdf\">Schematic<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/arduino_Uno_Rev3-02-TH.zip\">Eagle Files<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/ArduinoBoardUno\">Product Page<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino IDE Download<\/a><\/li><\/ul>"
  },
  {
    id: 10,
    name: "3 Ω Carbon Film Resistor 1/8W ±1%",
    price: 60.00,
    image: rr5,

    quantity: 0,
    isRetired: true,
    detailImage: [p11, p12, p13, p14,
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    description: "<div><!--block-->This is the new Arduino Uno R3. In addition to all the features of the previous board, the Uno now uses an ATmega16U2 instead of the 8U2 found on the Uno (or the FTDI found on previous generations). This allows for faster transfer rates and more memory. No drivers needed for Linux or Mac (inf file for Windows is needed and included in the Arduino IDE), and the ability to have the Uno show up as a keyboard, mouse, joystick, etc.<br><br><\/div><div><!--block-->The Uno R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided from the board. The other is a not connected and is reserved for future purposes. The Uno R3 works with all existing shields but can adapt to new shields which use these additional pins.<br><br><\/div><div><!--block-->Arduino is an open-source physical computing platform based on a simple i\/o board and a development environment that implements the&nbsp;<a href=\"http:\/\/www.processing.org\/\">Processing<\/a>\/<a href=\"http:\/\/wiring.org.co\/\">Wiring<\/a>&nbsp;language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be downloaded for free (currently for Mac OS X, Windows, and Linux).<br><br><\/div><div><!--block--><strong>Note:<\/strong>&nbsp;The Arduino Uno R3 requires the&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino 1.0<\/a>&nbsp;drivers folder in order to install properly on some computers. We have tested and confirmed that the R3 can be programmed in older versions of the IDE. However, the first time using the R3 on a new computer, you will need to have Arduino 1.0 installed on that machine. If you are interested in reading more about the changes to the IDE, check out the official&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/ReleaseNotes\">Arduino 1.0 Release notes<\/a>!<br><br><\/div><div><!--block-->Not sure which Arduino or Arduino-compatible board is right for you? Check out our&nbsp;<a href=\"https:\/\/www.sparkfun.com\/arduino_guide\">Arduino Buying Guide<\/a>!<br><br><\/div><strong>Features:<br><\/strong><div><!--block-->\t<\/div><ul><li><!--block-->ATmega328 microcontroller\t<\/li><li><!--block-->Input voltage - 7-12V\t<\/li><li><!--block-->14 Digital I\/O Pins (6 PWM outputs)\t<\/li><li><!--block-->6 Analog Inputs\t<\/li><li><!--block-->32k Flash Memory\t<\/li><li><!--block-->16Mhz Clock Speed<\/li><\/ul><div><!--block--><strong>Documents:<\/strong><br><\/div><div><ul><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/Arduino_Uno_Rev3-schematic.pdf\">Schematic<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/arduino_Uno_Rev3-02-TH.zip\">Eagle Files<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/ArduinoBoardUno\">Product Page<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino IDE Download<\/a><\/li><\/ul>"
  },
  {
    id: 11,
    name: "Power Resistor 5W 20ohm",
    price: 60.00,
    image: pp7,
    onSale: true,
    saleDate:"2024-02-26T17:00:00",
    onNew: true,
    quantity: 60,

    salePrice: 45.8,
    detailImage: [p11, p12, p13, p14,
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    description: "<div><!--block-->This is the new Arduino Uno R3. In addition to all the features of the previous board, the Uno now uses an ATmega16U2 instead of the 8U2 found on the Uno (or the FTDI found on previous generations). This allows for faster transfer rates and more memory. No drivers needed for Linux or Mac (inf file for Windows is needed and included in the Arduino IDE), and the ability to have the Uno show up as a keyboard, mouse, joystick, etc.<br><br><\/div><div><!--block-->The Uno R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided from the board. The other is a not connected and is reserved for future purposes. The Uno R3 works with all existing shields but can adapt to new shields which use these additional pins.<br><br><\/div><div><!--block-->Arduino is an open-source physical computing platform based on a simple i\/o board and a development environment that implements the&nbsp;<a href=\"http:\/\/www.processing.org\/\">Processing<\/a>\/<a href=\"http:\/\/wiring.org.co\/\">Wiring<\/a>&nbsp;language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be downloaded for free (currently for Mac OS X, Windows, and Linux).<br><br><\/div><div><!--block--><strong>Note:<\/strong>&nbsp;The Arduino Uno R3 requires the&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino 1.0<\/a>&nbsp;drivers folder in order to install properly on some computers. We have tested and confirmed that the R3 can be programmed in older versions of the IDE. However, the first time using the R3 on a new computer, you will need to have Arduino 1.0 installed on that machine. If you are interested in reading more about the changes to the IDE, check out the official&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/ReleaseNotes\">Arduino 1.0 Release notes<\/a>!<br><br><\/div><div><!--block-->Not sure which Arduino or Arduino-compatible board is right for you? Check out our&nbsp;<a href=\"https:\/\/www.sparkfun.com\/arduino_guide\">Arduino Buying Guide<\/a>!<br><br><\/div><strong>Features:<br><\/strong><div><!--block-->\t<\/div><ul><li><!--block-->ATmega328 microcontroller\t<\/li><li><!--block-->Input voltage - 7-12V\t<\/li><li><!--block-->14 Digital I\/O Pins (6 PWM outputs)\t<\/li><li><!--block-->6 Analog Inputs\t<\/li><li><!--block-->32k Flash Memory\t<\/li><li><!--block-->16Mhz Clock Speed<\/li><\/ul><div><!--block--><strong>Documents:<\/strong><br><\/div><div><ul><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/Arduino_Uno_Rev3-schematic.pdf\">Schematic<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/arduino_Uno_Rev3-02-TH.zip\">Eagle Files<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/ArduinoBoardUno\">Product Page<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino IDE Download<\/a><\/li><\/ul>"
  }, {
    id: 12,
    name: "Power Resistor 5W 100ohm",
    price: 60.00,
    image: pp8,
    onMost: true,
    quantity: 10,

    detailImage: [p11, p12, p13, p14,
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    description: "<div><!--block-->This is the new Arduino Uno R3. In addition to all the features of the previous board, the Uno now uses an ATmega16U2 instead of the 8U2 found on the Uno (or the FTDI found on previous generations). This allows for faster transfer rates and more memory. No drivers needed for Linux or Mac (inf file for Windows is needed and included in the Arduino IDE), and the ability to have the Uno show up as a keyboard, mouse, joystick, etc.<br><br><\/div><div><!--block-->The Uno R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided from the board. The other is a not connected and is reserved for future purposes. The Uno R3 works with all existing shields but can adapt to new shields which use these additional pins.<br><br><\/div><div><!--block-->Arduino is an open-source physical computing platform based on a simple i\/o board and a development environment that implements the&nbsp;<a href=\"http:\/\/www.processing.org\/\">Processing<\/a>\/<a href=\"http:\/\/wiring.org.co\/\">Wiring<\/a>&nbsp;language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be downloaded for free (currently for Mac OS X, Windows, and Linux).<br><br><\/div><div><!--block--><strong>Note:<\/strong>&nbsp;The Arduino Uno R3 requires the&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino 1.0<\/a>&nbsp;drivers folder in order to install properly on some computers. We have tested and confirmed that the R3 can be programmed in older versions of the IDE. However, the first time using the R3 on a new computer, you will need to have Arduino 1.0 installed on that machine. If you are interested in reading more about the changes to the IDE, check out the official&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/ReleaseNotes\">Arduino 1.0 Release notes<\/a>!<br><br><\/div><div><!--block-->Not sure which Arduino or Arduino-compatible board is right for you? Check out our&nbsp;<a href=\"https:\/\/www.sparkfun.com\/arduino_guide\">Arduino Buying Guide<\/a>!<br><br><\/div><strong>Features:<br><\/strong><div><!--block-->\t<\/div><ul><li><!--block-->ATmega328 microcontroller\t<\/li><li><!--block-->Input voltage - 7-12V\t<\/li><li><!--block-->14 Digital I\/O Pins (6 PWM outputs)\t<\/li><li><!--block-->6 Analog Inputs\t<\/li><li><!--block-->32k Flash Memory\t<\/li><li><!--block-->16Mhz Clock Speed<\/li><\/ul><div><!--block--><strong>Documents:<\/strong><br><\/div><div><ul><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/Arduino_Uno_Rev3-schematic.pdf\">Schematic<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/arduino_Uno_Rev3-02-TH.zip\">Eagle Files<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/ArduinoBoardUno\">Product Page<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino IDE Download<\/a><\/li><\/ul>"
  }, {
    id: 13,
    name: "Power Resistor 10W 51ohm",
    price: 60.00,
    image: pp9,
    onNew: true,
    onMost: true,
    quantity: 40,

    detailImage: [p11, p12, p13, p14,
    ],
    category: categories[1].name,
    technicalDetails: {
      productDimensions: "50.7mm x 23.0mm x 9.9mm / 2.0 x 0.9 x 0.4",
      productWeight: "6.4g / 0.2oz",
    },
    description: "<div><!--block-->This is the new Arduino Uno R3. In addition to all the features of the previous board, the Uno now uses an ATmega16U2 instead of the 8U2 found on the Uno (or the FTDI found on previous generations). This allows for faster transfer rates and more memory. No drivers needed for Linux or Mac (inf file for Windows is needed and included in the Arduino IDE), and the ability to have the Uno show up as a keyboard, mouse, joystick, etc.<br><br><\/div><div><!--block-->The Uno R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided from the board. The other is a not connected and is reserved for future purposes. The Uno R3 works with all existing shields but can adapt to new shields which use these additional pins.<br><br><\/div><div><!--block-->Arduino is an open-source physical computing platform based on a simple i\/o board and a development environment that implements the&nbsp;<a href=\"http:\/\/www.processing.org\/\">Processing<\/a>\/<a href=\"http:\/\/wiring.org.co\/\">Wiring<\/a>&nbsp;language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be downloaded for free (currently for Mac OS X, Windows, and Linux).<br><br><\/div><div><!--block--><strong>Note:<\/strong>&nbsp;The Arduino Uno R3 requires the&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino 1.0<\/a>&nbsp;drivers folder in order to install properly on some computers. We have tested and confirmed that the R3 can be programmed in older versions of the IDE. However, the first time using the R3 on a new computer, you will need to have Arduino 1.0 installed on that machine. If you are interested in reading more about the changes to the IDE, check out the official&nbsp;<a href=\"http:\/\/arduino.cc\/en\/Main\/ReleaseNotes\">Arduino 1.0 Release notes<\/a>!<br><br><\/div><div><!--block-->Not sure which Arduino or Arduino-compatible board is right for you? Check out our&nbsp;<a href=\"https:\/\/www.sparkfun.com\/arduino_guide\">Arduino Buying Guide<\/a>!<br><br><\/div><strong>Features:<br><\/strong><div><!--block-->\t<\/div><ul><li><!--block-->ATmega328 microcontroller\t<\/li><li><!--block-->Input voltage - 7-12V\t<\/li><li><!--block-->14 Digital I\/O Pins (6 PWM outputs)\t<\/li><li><!--block-->6 Analog Inputs\t<\/li><li><!--block-->32k Flash Memory\t<\/li><li><!--block-->16Mhz Clock Speed<\/li><\/ul><div><!--block--><strong>Documents:<\/strong><br><\/div><div><ul><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/Arduino_Uno_Rev3-schematic.pdf\">Schematic<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/uploads\/Main\/arduino_Uno_Rev3-02-TH.zip\">Eagle Files<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/ArduinoBoardUno\">Product Page<\/a>\t<\/li><li><!--block--><a href=\"http:\/\/arduino.cc\/en\/Main\/Software\">Arduino IDE Download<\/a><\/li><\/ul>"
  },
];

const saleItems = products.filter(product => product.onSale);
const NewProducts = products.filter(product => product.onNew);
const MostPopular = products.filter(product => product.onMost);
export {
  FontAwesomeIcon, 
  useState,useEffect, useRef, 
  Link,NavLink,useParams,
  Yup, useFormik,
  Form, Modal,Alert, Navbar, Nav, NavDropdown,Dropdown, DropdownButton , OverlayTrigger, Tooltip,
  useSelector,useDispatch,
  addToCart,setShipping,getTotals,removeFromCart,ChangeQuantityCart,
  openStateModal,closeStateModal,showStateModal,
  openLoginModal,closeLoginModal,showLoginModal,setDescribe,describeLoginModal,
  setSearch,searchValue,
  isLoginUser, loginUser, setIsLogIn ,user,
  contactInfo,navLinks,routes,categories,CarouselImages,
  logoImage,
  h1,h2,h3,h4,h5,p11,p12,p13,p14,pp1,pp3,pp4,pp5,pp6,pp7,pp8,pp9,rr1,rr2,rr3,rr4,rr5,
  out,inn,few,retired,
  products,saleItems,NewProducts,MostPopular,
  Hero,ElasticCarousel,ProductCard,Breadcrumb,Search,NavbarHeader,Footer,
  Register
 };