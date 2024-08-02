"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import Header from '@/app/components/Header'
import { useRouter } from 'next/navigation'
import React, { useState,useEffect} from 'react'
import { toast } from 'sonner'

const SignIn = () => {
  const router = useRouter(); // Correct usage of useRouter
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);



  const onSignIn = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    try {
      const response = await GlobalApi.signIn(username, password);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      sessionStorage.setItem("jwt", JSON.stringify(response.data.jwt));
      // Redirect only if login is successful
      router.push("/");
      toast.success("Login successfully");
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <Header/> */}
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="grocery store"
            src="/assets/mainlogo.png"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSignIn} autoComplete='off' method="POST" className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  onChange={(e) => setusername(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Create an account{' '}
              <a href="/create-account" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                Signup
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn
