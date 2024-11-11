import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  let [user, setUser] = useState({
    username : "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    let {name, value} = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
  }

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let response;
    try {
      if(user.password===user.confirm_password){
        response = await fetch('http://localhost:8080/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        })
      }
    }
    catch (error) {
      console.log(error);
    }
    // console.log(response);
    if(response && response.ok) Navigate('../login')
    else Navigate('../signup')
  }

  return (
    <>
  <section>
    <div className="flex flex-col items-center justify-top mt-10 mx-auto md:h-screen lg:py-0 ">
      
      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight">
            Create an account
          </h1>
          <form noValidate className="space-y-4 md:space-y-6" onSubmit={(e) => {
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
                htmlFor="name"
                className="block mb-2 text-sm font-medium"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="name"
                onChange={handleChange}
                pattern="^[a-zA-Z][a-zA-Z0-9_]{3,16}$"
                className="hover:border-blue-400 peer border-2 focus:ring-2 [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="abc"
                required
              />
              <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600">
                Please provide a valid username.
              </p>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                className="hover:border-blue-400 peer border-2 focus:ring-2 [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
              <p className="mt-2 hidden [.validated_&]:peer-invalid:block [.validated_&]:peer-[:not(:placeholder-shown)]:peer-invalid:block text-pink-600">
                  Please enter a valid email address.
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
                pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$'
                className="hover:border-blue-400 peer border-2 focus:ring-2 [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600">
                Provide a password having alphabets(a, b, etc), numeric(1, 2, etc) also special-characters(@, $, etc). (Minimum size: 6)
              </p>
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium"
              >
                Confirm password
              </label>
              <input
                type="confirm-password"
                name="confirm_password"
                id="confirm-password"
                onChange={handleChange}
                placeholder="••••••••"
                className="hover:border-blue-400 peer border-2 focus:ring-2 [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
              <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600">
                Please confirm your password.
              </p>
            </div>
        
            <button
              type="submit"
              className="w-full text-white bg-blue-800  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-black-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
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

export default SignUp