import Hero from '../Components/Hero/Hero'
import ElasticCarsoul from '../Components/ReactElasticCarousel/ElasticCarsoul'
import { products } from '../Constants'
const Home = () => {
  return (
    <div>
      <Hero />
      <ElasticCarsoul heading="Sale Items" products={products} color="white" rowCount={1}/>
      <ElasticCarsoul heading="New Products" products={products} color="#FAFAFA" rowCount={2}/>
      <ElasticCarsoul heading="Most popular" products={products} color="white" rowCount={1}/>
      </div>
  )
}

export default Home
