"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import { useRouter } from "next/navigation";
import { UpdateCart } from "@/app/_context/UpdateCart";
import React, { useContext, useState } from "react";
import { toast } from "sonner";

const ProductDetails = ({ product }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [productTotalPrice, setProductTotalPrice] = useState(
    product?.attributes?.disprice || product?.attributes?.price
  );

  // Use context for cart management
  const { updateCart, setUpdateCart } = useContext(UpdateCart);

  // Get user from session storage and parse it
  const user = typeof window !== "undefined" ? JSON.parse(sessionStorage.getItem("user")) : null;
  const jwt = typeof window !== "undefined" ? sessionStorage.getItem("jwt") : null;

  const addToCart = () => {
    if (!jwt) {
      router.push("/sign-in");
      return;
    }

    if (!user) {
      console.error("User not found in session storage");
      return;
    }

    const data = {
      data: {
        quantity: quantity,
        amount: Math.round(quantity * productTotalPrice),
        product: product.id,
        users_permisions_users: user.id,
        userId: user.id,
      },
    };

    console.log(data);
    GlobalApi.addToCart(data, jwt)
      .then((res) => {
        // console.log(res);
        toast.success("Product added to cart successfully");
        setUpdateCart(!updateCart); // Toggle cart update
      })
    //   .catch((e) => {
    //     console.error("Error adding to cart:", e);
    //     toast.error("Failed to add product to cart");
    //   });
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    updateTotalPrice(newQuantity);
  };

  const updateTotalPrice = (qty) => {
    const price = product?.attributes?.disprice || product?.attributes?.price;
    setProductTotalPrice(price * qty);
  };

  return (
    <div className="dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-fit rounded-lg dark:bg-gray-700 mb-4">
              <img
                className="w-fit h-fit"
                src={product?.attributes?.img?.data?.attributes?.url}
                alt={product?.attributes?.title}
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product?.attributes?.title}
            </h2>
            <div className="flex mb-4">
              <div className="mr-7">
                <span className="font-semibold text-gray-700 dark:text-gray-300">Price:</span> <br />
                <span className="text-gray-600 font-bold dark:text-gray-300">
                  ${productTotalPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {product?.attributes?.description}
              </p>
            </div>
            <div className="flex items-center mt-3">
              <label htmlFor="quantity" className="mr-4 font-bold text-gray-700 dark:text-gray-300">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 p-2 border rounded-md"
              />
            </div>
            <div className="w-1/2 pr-2 mt-3">
              <button
                className="w-full bg-[#16a34a] dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
