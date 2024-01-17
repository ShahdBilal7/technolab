import Hero from '../Components/Hero/Hero'
import ElasticCarousel from '../Components/ElasticCarousel/ElasticCarousel'
import { saleItems, NewProducts, MostPopular } from '../Constants'
const Home = () => {
  return (
    <div>
      <Hero />
      <ElasticCarousel heading="Sale Items" products={saleItems} color="white" rowCount={1} flagSale={false} />
      <ElasticCarousel heading="New Products" products={NewProducts} color="#FAFAFA" rowCount={2} flagSale={true} />
      <ElasticCarousel heading="Most popular" products={MostPopular} color="white" rowCount={1} flagSale={true} />
    </div>
  )
}
export default Home
