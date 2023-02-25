import React from 'react'
import { useRouter } from 'next/router'
import data from '../../utils/data'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import Card from '../../components/Card'

const Product = () => {
    const router = useRouter()

    const { slug } = router.query

    const { products } = data

    const product = products.find((item) => item.slug === slug)

    return (
        <>
            <Layout title={product && product.name}>
                {!product && (
                    <div className='h-[90vh] flex flex-col items-center justify-center gap-2'>
                        <h1>No product found!</h1>
                        <Link
                            className='hover:underline flex gap-2 text-cOrange'
                            href='/'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-6 h-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
                                />
                            </svg>
                            Back to Home
                        </Link>
                    </div>
                )}
                {product && (
                    <div className='grid grid-cols-3 mt-2 gap-4'>
                        <h1 className='text-center col-span-3'>
                            {product.name}
                        </h1>
                        <div className='col-span-3'>
                            <Link
                                className='flex gap-2 items-center w-[100px] p-2 hover:underline text-cOrange'
                                href='/'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='w-6 h-6'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
                                    />
                                </svg>
                                Home
                            </Link>
                        </div>
                        <div>
                            <Image
                                src={product.image}
                                alt={product.name}
                                height={640}
                                width={640}
                            />
                        </div>
                        <div className=''>
                            <ul className='space-y-2'>
                                <li>Category: {product.category}</li>
                                <li>Brand: {product.brand}</li>
                                <li>
                                    Rating: {product.rating}{' '}
                                    {`(${product.numReviews} review(s))`}
                                </li>
                                <li>Description: {product.description}</li>
                            </ul>
                        </div>
                        <div>
                            <Card growOnHover={false}>
                                <div className='p-2 grid grid-cols-2'>
                                    <div>Price</div>
                                    <div>${product.price}</div>
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0
                                            ? 'In Stock'
                                            : 'Out of Stock'}
                                    </div>

                                    <button className='mt-2 flex gap-2 col-span-2 justify-center p-2 bg-cOrange rouned rounded-md hover:bg-gray-600 transition-all hover:text-white ease-in-out'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth={1.5}
                                            stroke='currentColor'
                                            className='w-6 h-6'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                                            />
                                        </svg>
                                        Add to Cart
                                    </button>
                                </div>
                            </Card>
                        </div>
                    </div>
                )}
            </Layout>
        </>
    )
}

export default Product
