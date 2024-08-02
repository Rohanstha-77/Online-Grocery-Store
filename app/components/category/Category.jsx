"use client"


import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Category = () => {
    const [catagoryList,setCatagoryList] = useState([])

    useEffect(()=>{
        getCatagoryList()
    },[])
    const getCatagoryList =async()=>{
        try {
            const response = await GlobalApi.getCatagory();
            setCatagoryList(response.data || [])
            // console.log(response.data)
        } catch (error) {
            console.log("error in geting catagories list" +error)
        }
    }

    // const imageUrl = Category?.attributes?.image?.data?.attributes?.url;
    // console.log(imageUrl)
  return (
    <>
    <div className="container py-10">
        <h1 className='text-3xl font-semibold py-5'>Explore Categories</h1>
        <div className="grid grid-cols-7 items-center gap-10 justify-center pt-5">
            {catagoryList?.data?.length > 0 ? (
                catagoryList.data.map((catagory, index) => (
                    <Link key={index} href={"/product-catagory/"+catagory.attributes.title}>
                        <div key={index} className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-content cursor-default hover:bg-gray-200">
                            <Image 
                                src={catagory?.attributes?.image?.data?.attributes?.url}
                                className='hover:scale-110 hover:transition-transform cursor-pointer' 
                                height={100} 
                                width={100}
                                alt='no image found'
                                />
                            <p className="pt-5">{catagory?.attributes?.title}</p>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No data Found</p>
            )}
        </div>
    </div>
    </>
  )
}

export default Category