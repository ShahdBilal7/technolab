import NavbarHeader from './Components/NavbarHeader/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Breadcrum from "./Components/Breadcrumb/Breadcrum.jsx";
import ElasticCarousel from "./Components/ElasticCarousel/ElasticCarousel.jsx";
import ProductCard from './Components/ProductCard/ProductCard.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Register from './Pages/Register.jsx';
import Products from './Pages/Products.jsx';
import Error404 from './Pages/Error404.jsx';
import Cart from './Pages/Cart.jsx';
import Detail from './Pages/ProductDetail.jsx';
import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import { addToCart, decreaseCart, getTotals, removeFromCart } from "../src/features/cartSlice.js";
import { useDispatch,useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link, useParams } from 'react-router-dom';
import { Form, Dropdown, DropdownButton ,Modal} from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
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


const routes = [
  { path: '/cart', element: <Cart /> },
  { path: "/detail/:id", element: <Detail /> },
  { path: '*', element: <Error404 /> },
];

const navLinks = [
  { path: '/', element: <Home />, label: "Home" },
  { path: '/products', element: <Products />, label: "Products" },
  { path: '/about', element: <About />, label: "About" },
  { path: '/contact', element: <Contact />, label: "Contact" },
  // { path: '/services', element: <Services />, label: "Services" },
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
    id: 1,
    name: "Power Resistor 5W 0.5ohm",
    price: 50.00,
    image: pp1,
    onSale: true,
    salePrice: 25.8,
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
  {
    id: 2,
    name: "0.5Ω Carbon Film Resistor 1/8W ±1%",
    price: 60.00,
    image: rr1,
    onSale: true,
    salePrice: 888.8,
    quantity: 20,
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
    id: 3,
    name: "Power Resistor 5W 1ohm",
    price: 70.00,
    image: pp3,
    onSale: true,
    salePrice: 30.8,
    quantity: 35,
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
    id: 4,
    name: "1.1Ω Carbon Film Resistor 1/8W ±1%",
    price: 60.00,
    image: rr2,
    onSale: true,
    salePrice: 888.8,
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
    quantity: -1,
    isRetired: true,
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
    onSale: true,
    quantity: 0,

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
    onMost: true,
    quantity: -1,
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
    onNew: true,
    quantity: 60,

    salePrice: 888.8,
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
export {out,inn,few,retired,useDispatch,useSelector,saleItems, NewProducts, MostPopular,Modal, ProductCard, Breadcrum, Form, Dropdown, DropdownButton, ElasticCarousel, Hero, useRef, categories, products, FontAwesomeIcon, contactInfo, NavLink, Link, useParams, routes, navLinks, CarouselImages, logoImage, useState, useEffect, Footer, NavbarHeader, Register,addToCart, decreaseCart, getTotals, removeFromCart }