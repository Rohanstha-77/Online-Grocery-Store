import { TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const CartItemList = ({ cartItem, onDeleteItem }) => {
  return (
    <div className='container py-10 h-[550px] overflow-auto'>
      <div className='grid grid-cols-1 items-start gap-4 justify-center'>
        {cartItem?.length > 0 ? (
          cartItem.map((item, index) => (
            <div
              key={index}
              className='bg-gray-100 py-2 px-4 flex gap-6 items-center justify-around hover:bg-gray-200 cursor-pointer'
            >
              <Image src={item.img} height={50} width={50} alt='image not found' />
              <div>
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>${item.amount.toFixed(2)}</p>
              </div>
              <TrashIcon height={40} width={40} onClick={() => onDeleteItem(item.id)} />
            </div>
          ))
        ) : (
          <div className='relative flex justify-center items-center py-14'>
            {/* <div className='absolute animate-spin rounded-full h-28 w-28 border-t-4 border-b-4 border-purple-500' /> */}
            <h1 className='text-green-500 text-lg'>No item found</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartItemList
