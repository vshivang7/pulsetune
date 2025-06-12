import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (user.password !== user.confirm_password) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          password: user.password,
        }),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        const data = await response.json();
        setError(data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    }
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-top mt-10 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight">
              Create an account
            </h1>
            {error && <p className="text-red-600 font-semibold">{error}</p>}
            <form
              noValidate
              className="space-y-4 md:space-y-6"
              onSubmit={e => {
                e.preventDefault();
                e.target.classList.add("validated");
                if (!e.target.checkValidity()) {
                  e.target.querySelectorAll(":invalid")[0].focus();
                  return;
                }
                handleSubmit(e);
              }}
            >
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  id="name"
                  onChange={handleChange}
                  pattern="^[a-zA-Z][a-zA-Z0-9_]{3,16}$"
                  className="hover:border-blue-400 peer border-2 focus:ring-2 [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="abc"
                  required
                  aria-describedby="username-error"
                />
                <p id="username-error" className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600">
                  Please provide a valid username.
                </p>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className="hover:border-blue-400 peer border-2 focus:ring-2 [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                  aria-describedby="email-error"
                />
                <p id="email-error" className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600">
                  Please enter a valid email address.
                </p>
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="••••••••"
                  pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$'
                  className="hover:border-blue-400 peer border-2 focus:ring-2 [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  aria-describedby="password-error"
                />
                <p id="password-error" className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600">
                  Provide a password with letters, numbers, and optionally special characters (min 6 chars).
                </p>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium">Confirm password</label>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm-password"
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="hover:border-blue-400 peer border-2 focus:ring-2 [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
                <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600">
                  Please confirm your password.
                </p>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
              >
                Create an account
              </button>

              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp;
