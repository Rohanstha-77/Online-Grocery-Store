import Header from "./components/Header";
import Banner from "./components/Banner";
import Category from "./components/category/Category";

import Testimonial from "./testimonial/page";
import PaymentMethod from "./components/paymentMethod/PaymentMethod";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";
import GlobalApi from "./_utils/GlobalApi";
import Products from "./components/products/products";

export default async function Home() {
  const getProduct= await GlobalApi.getProduct();
  // console.log(getProduct)
  return (
    <>
      {/* <Header/> */}
      <Banner/>
      <PaymentMethod/>
      <Category/>
      <div className="container py-10">
        <h1 className="text-3xl font-semibold py-5">Popular Product</h1>
        <Products getProduct = {getProduct}/>
      </div>
      <Testimonial/>
      <Newsletter/>
      {/* <Footer/> */}
    </>
  );
}
