import Slider from "react-slick";
import "./CustomPaging.css";
const CustomPaging = ({ detailImage }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img style={{ borderRadius: "10px" }} src={detailImage[i]} alt="imageDetail" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        {detailImage.map((image, index) =>
          <div key={index}>
            <img style={{ borderRadius: "10px" }} src={image} alt="imageDetail" />
          </div>
        )}
      </Slider>
    </div>
  )
}

export default CustomPaging
