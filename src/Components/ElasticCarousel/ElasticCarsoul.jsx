// import Carousel from 'react-elastic-carousel';
import "./ElasticCarsoul.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";

const ElasticCarsoul = ({heading,products,color,rowCount,flagSale}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
      rows:rowCount,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
            }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
            }
      },
    
    ]
  };
  return (
    <section className="ElasticCarsoul " style={{backgroundColor:color}}>
    <div className="main-heading">
      <h2>{heading}</h2>
    </div>
    <div className="  container">
  <Slider {...settings}>
  {products.map((product) => (
    <div key={product.id} className="p-4">
      <ProductCard product={product} flagSale={flagSale} />
    </div>
  ))}
  </Slider>
    </div>
  </section>
    
  )
}

export default ElasticCarsoul
