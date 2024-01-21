import { saleItems, NewProducts, MostPopular,Hero,ElasticCarousel } from '../Constants'
const Home = () => {
  return (
    <div>
      <Hero />
      <ElasticCarousel heading="Sale Items"  slidesToShow={4} products={saleItems} color="white" rowCount={1} flagSale={true} />
      <ElasticCarousel heading="New Products" slidesToShow={4} products={NewProducts} color="#FAFAFA" rowCount={1} flagSale={true} />
      <ElasticCarousel heading="Most popular"  slidesToShow={4} products={MostPopular} color="white" rowCount={1} flagSale={true} />
    </div>
  )
}
export default Home
