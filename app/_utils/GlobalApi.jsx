import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://192.168.1.189:1337/api",
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

const getCartItems = async (userId, jwt) => {
    try {
    //   console.log('Requesting cart items with User ID:', userId);
    //   console.log('Using JWT Token:', jwt); 
  
      const res = await axiosClient.get(`/user-carts?populate[products][populate]=*&filters[userId][$eq]=${userId}`, {
        headers: {
          Authorization: "Bearer" + jwt,
        },
      });
  
      const result = res.data.data || [];
    //  console.log(result);
        const cartItemsList = result.map((item) => ({
            title: item.attributes?.products?.data?.attributes?.title,
            quantity: item.attributes?.quantity,
            amount: item.attributes?.amount,
            img: item.attributes?.products?.data?.attributes?.img?.data?.attributes?.formats?.url,
            actualPrice: item.attributes?.products?.data?.attributes?.price,
            id: item.id,
        }));
    //   console.log(cartItemsList)
      return cartItemsList;
    } catch (error) {
      console.error('Error fetching cart items:', error.response?.data || error.message);
      throw error;
    }
  };
  

  const removeItem = (id,jwt)=>axiosClient.delete(`/user-carts/${id}`,{
    headers: {
      Authorization: "Bearer" + jwt,
    },
  })
    
  const esewaIntegration= (id ,jwt)=>{
      axiosClient.post(`/user-carts/${id}`,
        {
        header: "Bearer" + jwt
      }
    ).then((res)=>{
      const results = res.data.data
      console.log(results)
    })
  }


export default {getCatagory, getProduct, getSingleCatagory,registerUser,signIn, addToCart, getCartItems, removeItem, esewaIntegration};
