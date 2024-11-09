import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({user, setUser}) => {
  const Navigate = useNavigate();
  let [data, setData] = useState({
    username : "",
    password: "",
  });

  const handleChange = (e) => {
    let {name, value} = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
    response.json().then((data) => {
      setUser(data);
    }).catch((err) => {
      console.log("Some Error Occurred");
    })
    Navigate("/")
  }

  return (
    <>
  <section>
    <div className="flex flex-col items-center justify-top mt-10 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight">
            Login
          </h1>
          <form noValidate className="space-y-4 md:space-y-6 group" onSubmit={(e) => {
                  e.preventDefault();
                  e.target.classList.add("validated");
                  if (!e.target.checkValidity()) {
                        e.target.querySelectorAll(":invalid")[0].focus();
                        return;
                  }
                  handleSubmit(e);
            }}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                className="peer border-2 focus:ring-2 [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="abc"
                required
              />
              <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600">
                Please provide your username.
              </p>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="••••••••"
                className="peer border-2 focus:ring-2 [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600">
                Please provide a password.
              </p>
            </div>
        
            <button
              type="submit"
              className="w-full text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Login
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-black-400">
              Dont't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                SignUp here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</>

    
  )
}

export default LoginForm