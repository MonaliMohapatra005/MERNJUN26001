import React from 'react'
import {useState} from 'react';

function Form() {
    const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });



  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem("user", JSON.stringify(form));
    const data = JSON.parse(localStorage.getItem("user"));
    console.log(data);

    alert("Registration Successful");
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  };


  return (
    <div className="min-h-screen flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className=" p-6 rounded shadow-md w-70 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">
          Registration Form
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />


        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded w-full"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Reset
          </button>
        </div>
      </form>
    </div>


  )
}

export default Form