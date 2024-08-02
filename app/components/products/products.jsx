import React from 'react'
import Product from '@/app/product/page'

const Products = ({getProduct}) => {
    // console.log(getProduct)
  return (
    <>
      <div className="">
        <div className="grid grid-cols-4 items-center gap-10">
        {Array.isArray(getProduct) ? (
          getProduct.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
        </div>
      </div>
    </>
  )
}

export default Products