import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {getCartItems} from '@/app/_utils/GlobalApi'

const page = () => {
    const [user, setuser] = useState(null)
    const [jwt, setjwt] = useState(null)
    const [totalCart, settotalCart] = useState(0)
    const [cartItem, setCartItem] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const [loading, setloading] = useState(true)
    const router = useRouter()
    const [totalAmount, setTotalAmount] = useState("0.00")

    const [username, setUsername] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [zip, setzip] = useState("")
    const [address, setaddress] = useState("")

    useEffect(() => {
      if(!typeof window !== "undefined"){
        const storedUser = JSON.parse(sessionStorage.getItem("user"))
        const storedJwt = JSON.parse(sessionStorage.getItem("jwt"))
        if(!storedJwt){
            router.push("/sign-in")
        }else{
            setuser(storedUser)
            setjwt(setjwt)
            getCartItems(storedUser, storedJwt)
        }
    }
    }, [])
    useEffect(()=>{
        if(cartItem.length>0){
            const calculateTotals = ()=>{
                let total = 0
                cartItem.forEach((item)=>{
                    total+=item.amount;
                })
                const subtotal = total.toFixed(2)
                setSubTotal(subtotal)
                const totalwithTaxAndShipping= (total*1.01+10).toFixed(2)
                setTotalAmount(totalwithTaxAndShipping)
                setloading(false)
            }
            calculateTotals()
        }
    },[cartItem])
    
    

  return (
    <>
        
    </>
  )
}

export default page