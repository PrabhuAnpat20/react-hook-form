import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast.success("Login successful",{
    position:"top-center",
    autoClose: 1000,

  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
    notify();
  };

  return (
    <>
      <div className=" mx-auto border-2 border-black  w-1/2 text-center p-12 mt-48 ">
        <form onSubmit={handleSubmit(onsubmit)}>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            type="text"
            placeholder="email"
            className="my- p-1 rounded-sm"
          />
          {errors.email && (
            <div className=" text-red-600">{errors.email.message}</div>
          )}
          <br />
          <input
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "password must have 8 characters",
              },
            })}
            type="password"
            placeholder="password"
            className=" my-3 p-1 rounded-sm"
          />
          {errors.password && (
            <div className=" text-red-600">{errors.password.message}</div>
          )}
          <br />
          <button
            type="submit"
            className=" my-8  bg-gray-300 font-bold p-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
