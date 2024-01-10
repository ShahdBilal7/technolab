import React from 'react';
import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';
import h1 from '../Assets/h1.png';
import h2 from '../Assets/h2.jpg';
import h3 from '../Assets/h3.png';

const images = [
  { src: h1, alt: 'Image 1', caption: 'First image' },
  { src: h2, alt: 'Image 2', caption: 'Second image' },
  { src: h3, alt: 'Image 3', caption: 'Third image' },
];

const Hero = () => {
  return (
    <div className='hero container'>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
