import React from 'react'

interface props {
    product: {
        name: string
        slug: string
        category: string
        image: string
        isFeatured?: boolean
        featuredImage?: string
        price: number
        brand: string
        rating: number
        numReviews: number
        countInStock: number
        description: string
    }
}

const ProductCard = ({ product }: props) => {
    const { name, slug, image, price } = product
    return (
        <div>
            <div>
                <img src={image} alt='' />
            </div>
            <div>
                <p>{name}</p>
                <p>{`$${price}`}</p>
            </div>
        </div>
    )
}

export default ProductCard
