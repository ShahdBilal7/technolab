import CustomPaging from "../Components/CustomPaging/CustomPaging"
import DetailCard from "../Components/DetialCard/DetailCard";
import { products, Breadcrum, ElasticCarousel, useParams } from "../Constants";

const Detail = () => {
  const { id } = useParams();
  const product = products[id - 1];
  return (
    <div className="container">
      <div className="product-detail mt-4 mb-5">
        <Breadcrum Category={product.category} SubCategory={"subcategory"} Data={product.name} />
        <div className="row">
          <div className="col-lg-8 col-sm-12 col-xs-12 ">
            <section className="image-detail">
              <CustomPaging detailImage={product.detailImage} />
            </section>
            <section className="description mt-5">
              <div className="headline">
                <h2>Description</h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </section>
            <section className="technicalDetails mt-5">
              <div className="headline">
                <h2>Technical Details</h2>

              </div>
              <p>Product Dimensions: {product.technicalDetails.productDimensions}</p>
              <p>Product Weight: {product.technicalDetails.productWeight}</p>
            </section>
          </div>
          <div className="col-lg-4 hidden-sm hidden-xs">
            <DetailCard product={product} />
          </div>
        </div>
      </div>
      <section className="relatedProduct">
        <div className="headline">
          <h2>Related Product</h2>
        </div>
        <ElasticCarousel slidesToShow={4}  products={products} color="white" rowCount={1} flagSale={true} />
      </section>

    </div>
  )
}

export default Detail