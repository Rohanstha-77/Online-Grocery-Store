import { ShoppingBag, Star } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { HeartIcon } from '@heroicons/react/24/outline'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProductDetails from '../components/products/ProductDetails'


const Product = ({product}) => {
  // console.log(product)
  return (
    <>
      


          <div className="product_col">
            <div className="bg-gray-300 mb-4 p-5">
              <Image src={product?.attributes?.img?.data?.attributes?.url} alt='image not found' className='cursor-pointer hover:scale-110' height={50} width={1000}/>
            </div>
            <div className="flex items-center py-3">
              <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product?.attributes?.rating}</span>
            </div>
                <div className="grid grid-cols-2 item-center py-3">
                  <h3>{product?.attributes?.title}</h3>
                  <div className='flex gap-4 justify-end'>
                    {product?.attributes?.disprice && (
                      <h1 className='text-end font-semibold text-lg'>${product?.attributes?.disprice}</h1>
                    )}
                    <h1 className={`text-end font-semibold text-lg ${product?.attributes?.disprice && "line-through text-gray-400"}`}>${product?.attributes?.price}</h1>
                  </div>
                </div>{""}
                <div className="grid grid-cols-2 items-center py-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600">Add To Cart<ShoppingBag size={28} className='ps-2'/></Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogDescription>
                        <ProductDetails product={product}/>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                  {/* <Button className="bg-green-600">Add To Cart<ShoppingBag size={28} className='ps-2'/></Button> */}
                  <a href="" className='flex justify-end'>
                    <HeartIcon width={25} className='cursor-pointer hover:scale-110 hover:text-red-600'/>
                  </a>
                </div>
          </div>
    </>
)}

export default Product