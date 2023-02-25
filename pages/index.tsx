import type { NextPage } from 'next'
import Layout from '../components/Layout'
import data from '../utils/data'
import ProductCard from '../components/ProductCard'

const Home: NextPage = () => {
    const { products } = data
    return (
        <Layout>
            <div>
                <h1>Products</h1>
                <ul className='grid grid-cols-3 gap-3'>
                    {products.map((item) => (
                        <li key={item.image}>
                            <ProductCard product={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default Home
