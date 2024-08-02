import { Headphones, Receipt, Rocket, ShieldCheckIcon } from 'lucide-react'
import React from 'react'

const PaymentMethod = () => {
  return (
    <>
        <div className="container py-10">
            <div className="grid grid-cols-4 gap-10">
                <div className="grid grid-cols-3 bg-green-100 py-5 px-2 rounded-xl">
                    <div className='flex justify-center'>
                        <Rocket size={50} className='bg-green-600 text-white p-2 rounded-lg'/>
                    </div>
                    <div className="col-span-2 ">
                        <h2 className='font-semibold'>Free Shipping</h2>
                        <p className='text-sm'>Lorem ipsum, dolor sit amet </p>
                    </div>
                </div>{""}
                <div className="grid grid-cols-3 bg-green-100 py-5 px-2 rounded-xl">
                    <div className='flex justify-center'>
                        <Receipt size={50} className='bg-green-600 text-white p-2 rounded-lg'/>
                    </div>
                    <div className="col-span-2 ">
                        <h2 className='font-semibold'>Easy To Return</h2>
                        <p className='text-sm'>Lorem ipsum, dolor sit amet </p>
                    </div>
                </div>{""}
                <div className="grid grid-cols-3 bg-green-100 py-5 px-2 rounded-xl">
                    <div className='flex justify-center'>
                        <ShieldCheckIcon size={50} className='bg-green-600 text-white p-2 rounded-lg'/>
                    </div>
                    <div className="col-span-2 ">
                        <h2 className='font-semibold'>Secure Payment</h2>
                        <p className='text-sm'>Lorem ipsum, dolor sit amet </p>
                    </div>
                </div>{""}
                <div className="grid grid-cols-3 bg-green-100 py-5 px-2 rounded-xl">
                    <div className='flex justify-center'>
                        <Headphones size={50} className='bg-green-600 text-white p-2 rounded-lg'/>
                    </div>
                    <div className="col-span-2 ">
                        <h2 className='font-semibold'>24/7 Support</h2>
                        <p className='text-sm'>Lorem ipsum, dolor sit amet </p>
                    </div>
                </div>{""}
            </div>
        </div>
    </>
  )
}

export default PaymentMethod