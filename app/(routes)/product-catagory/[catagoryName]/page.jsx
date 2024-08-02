import GlobalApi from '@/app/_utils/GlobalApi'
import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/Header';
import Products from '@/app/components/products/products';
import React from 'react'

const catagoryName = async ({params}) => {
    const response = await GlobalApi.getSingleCatagory(params.catagoryName);
    const getProduct = response.data.data;
    // console.log(getProduct)
  return (
    <>
        {/* <Header/> */}
        <div className="container-fluid">
            <h2 className='p-4 bg-green-600 text-white font-semibold text-3xl text-center'>{params.catagoryName}</h2>
            <Products getProduct={getProduct}/>
        </div>
        {/* <Footer/> */}
    </>
  )
}

export default catagoryName