import { saleItems, NewProducts, MostPopular,Hero,ElasticCarousel } from '../Constants'
const Home = () => {
  return (
    <div>
      <Hero />
      <ElasticCarousel heading="Sale Items" products={saleItems} color="white" rowCount={1} flagSale={true} />
      <ElasticCarousel heading="New Products" products={NewProducts} color="#FAFAFA" rowCount={2} flagSale={true} />
      <ElasticCarousel heading="Most popular" products={MostPopular} color="white" rowCount={1} flagSale={true} />
    </div>
  )
}
export default Home
