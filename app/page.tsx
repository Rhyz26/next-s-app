import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main><h1>My first next js project</h1>
    <p> When you click on the users below its going to display for you a list of random users </p>
    <Link href="/users">Users</Link>
    {/* <button className='btn btn-primary' onClick={() => console.log("Click")}>Add to cart</button> */}

    <ProductCard/>
    </main>
      )
}
