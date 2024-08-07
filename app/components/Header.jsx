'use client'

import { useState, useEffect, useContext } from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"


import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import GlobalApi from '../_utils/GlobalApi'
import CartItemList from './cart/CartItemList'
import { UpdateCart } from '../_context/UpdateCart'
import { toast } from 'sonner'


export default function Header() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [cartItem, setCartItem] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [totalCart, setTotalCart] = useState(0)
  const [user, setUser] = useState(null)
  const [jwt, setJwt] = useState('')
  const {updateCart,setUpdateCart} = useContext(UpdateCart)

  useEffect(()=>{
    let total=0;
    cartItem?.map((item)=>{
      total+=item.amount;
    }
    )
    setSubTotal(total.toFixed(2))
  })

  const onDeleteItem=(id)=>{
    GlobalApi.removeItem(id,jwt).then((res)=>{
      setUpdateCart(!UpdateCart)
      getCartsData();                                     
      if (getCartsData()) {
        toast('Your cart has been sucessfully removed')
      }else{
        toast("some thing went wrong")
      }
    }
  )}

  useEffect(() => {
    // Retrieve user and JWT from session storage
    const storedUser = sessionStorage.getItem('user');
    const storedJwt = sessionStorage.getItem('jwt');
    // console.log('Stored JWT:', storedJwt); // Debugging line
    // console.log('Stored User:', storedUser); // Debugging line
    if (storedUser && storedJwt) {
      setUser(JSON.parse(storedUser));
      setJwt(storedJwt);
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [])

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    const storedJwt = sessionStorage.getItem('jwt');
    // console.log('User:', storedUser); // Debugging line
    // console.log('JWT:', storedJwt); // Debugging line
    if (storedUser && storedJwt) {
      getCartsData();
    } else {
      console.log("User or JWT not found");
    }
  }, [user, jwt])
  
  const OnSignOut = () => {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('jwt')
    router.push('/sign-in')
    window.location.reload()
  }


  const getCartsData = async () => {
    const storedUser = sessionStorage.getItem('user');
    const storedJwt = sessionStorage.getItem('jwt');
    if (!storedUser || !storedJwt) return console.log("user and jwt not found.");

    try {
      const cartItemsList = await GlobalApi.getCartItems(user.id, jwt);
      // console.log('Cart Items List:', cartItemsList); // Debugging line
      setTotalCart(cartItemsList?.length || 0);
      setCartItem(cartItemsList)
      getCartsData()
       // Safely handle undefined or null
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  }

  const checkOut=()=>{
    router.push(jwt?"/Checkout":"something went wrong")
  }
  // console.log(cartItem)
  return (
    <header className="bg-white">
      <nav aria-label="Global" className="container mx-auto flex items-center justify-between py-6">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image src="/assets/mainlogo.png" height={80} width={180} alt="Company Logo"/>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-md font-semibold leading-6 text-gray-900">Product</a>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900">About</a>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900">Contact</a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <a href="#" className='text-3xl-'>
            <MagnifyingGlassIcon width={22} className='pt-1 cursor-pointer hover:scale-110 hover:transition-transform'/>
          </a>
          <Sheet>
            <SheetTrigger>
              <a href="#" className="text-3xl">
                <ShoppingBagIcon width={22} className='cursor-pointer hover:scale-110 hover:transition-transform'/>
              </a>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="bg-green-600 text-white text-xl font-semibold py-2 rounded-md text-center mx-8 shadow-xl">My Cart</SheetTitle>
                <SheetDescription>
                  <CartItemList cartItem={cartItem} onDeleteItem={onDeleteItem}/>
                </SheetDescription>
                <SheetClose>
                  <div className='absolute w-[85%] bottom-6 flex flex-col gap-5'>
                    <h2 className='font-semibold text-lg flex justify-around'>Sub Total: <span>${subTotal}</span></h2>
                    <Button className="bg-green-500 mx-10" onClick={checkOut}>
                      Checkout
                    </Button>
                  </div>
                </SheetClose>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Badge className="text-sm w-9 h-9 px-3 bg-[#16a34a]">{totalCart}</Badge>
          {!isLogin ? (
            <Link href="/sign-in">
              <Button className="bg-green-600 hover:bg-green-500 shadow-lg">
                Login
              </Button>
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <UserCircleIcon width={22} className='cursor-pointer hover:scale-110 hover:transition-transform'/>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>My orders</DropdownMenuItem>
                <DropdownMenuItem onClick={OnSignOut} >Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="Company Logo" src="/assets/mainlogo.png" className="h-8 w-auto"/>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                  </DisclosureButton>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6 flex gap-4">
                <a href="#">
                  <MagnifyingGlassIcon width={35} className='bg-gray-200 p-2 rounded-full cursor-pointer hover:scale-110 hover:transition-transform'/>
                </a>
                <a href="#">
                  <ShoppingBagIcon width={35} className='bg-gray-200 p-2 rounded-full cursor-pointer hover:scale-110 hover:transition-transform'/>
                </a>
                <a href="#">
                  <UserCircleIcon width={35} className='bg-gray-200 p-2 rounded-full cursor-pointer hover:scale-110 hover:transition-transform'/>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
