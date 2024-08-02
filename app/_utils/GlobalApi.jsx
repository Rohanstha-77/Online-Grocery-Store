import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://192.168.1.8:1337/api",
});

const getCatagory = ()=> axiosClient.get("/catagories?populate=*")


const getProduct = ()=> axiosClient.get("/products?populate=*").then((res)=>res.data.data) || [];
// console.log(getProduct)

const getSingleCatagory = (catagory)=> axiosClient.get(`/products?populate=*&filters[catagories][title][$in]=${catagory}`)

const registerUser = (username,email,password)=> axiosClient.post("/auth/local/register",{
    username,
    email,
    password
})

const signIn = (username,password)=>axiosClient.post("/auth/local",{
    identifier : username,
    password,
})

const addToCart = (data,jwt)=>axiosClient.post("/user-carts",data,{
    header:{
        Authorization: "Bearer" + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTcyMjUyNTAwNiwiZXhwIjoxNzI1MTE3MDA2fQ.zf8c3E6mi96PaqxKyOAE4dpgLp-Ec1gq-ZSMiegqe9w",
    }
})

const getCartItems=(userId,jwt)=> axiosClient.get(`/user-carts?populate[products][populate]=*&filters[userId][$eq]=${userId}`,{
    headers: {
        Authorization: "Bearer" + jwt
    },
}).then((res)=>{
    const result = res.data.data;
    console.log(result)
    const cartItemsList = result.map((item,index)=>({
        title: item.attributes.products?.data[0].attributes.title,
        quantity: item.attributes.quantity,
        amount: item.attributes.amount,
        img: item.attributes.products?.data[0].attributes.img?.data?.attributes?.url,
        actualPrice: item.attributes.products?.data[0].attributes.price,
        id: item.id
    }))
    // return cartItemsList
    console.log(cartItemsList)
})


export default {getCatagory, getProduct, getSingleCatagory,registerUser,signIn, addToCart, getCartItems};
