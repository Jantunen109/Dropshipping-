import Head from 'next/head'
import ProductCard from '../components/ProductCard'
import products from '../public/products.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dropshipping Store</title>
      </Head>
      <main>
        <h1>AliExpress Dropshipping Store</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </main>
    </>
  )
}
