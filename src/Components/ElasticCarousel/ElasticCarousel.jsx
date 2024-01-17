// import Carousel from 'react-elastic-carousel';
import "./ElasticCarousel.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";

const ElasticCarousel = ({ slidesToShow=3,heading, products, color, rowCount, flagSale }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    initialSlide: 0,
    rows: rowCount,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: slidesToShow-1,
          slidesToScroll: slidesToShow-1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slidesToShow-2,
          slidesToScroll: slidesToShow-2,
        }
      },

    ]
  };
  return (
    <section className="ElasticCarousel " style={{ backgroundColor: color }}>
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

export default ElasticCarousel
