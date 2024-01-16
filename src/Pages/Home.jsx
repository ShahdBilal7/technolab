import Hero from '../Components/Hero/Hero'
import ElasticCarsoul from '../Components/ElasticCarousel/ElasticCarsoul'
import { saleItems,NewProducts,MostPopular } from '../Constants'
const Home = () => {
  return (
    <div>
      <Hero />
      <ElasticCarsoul heading="Sale Items" products={saleItems} color="white" rowCount={1} flagSale={false}/>
      <ElasticCarsoul heading="New Products" products={NewProducts} color="#FAFAFA" rowCount={2} flagSale={true}/>
      <ElasticCarsoul heading="Most popular" products={MostPopular} color="white" rowCount={1} flagSale={true}/>
      </div>
  )
}
export default Home
