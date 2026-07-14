import axios from "axios";
import React, { useState } from "react";

function UpdateData() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleUpdate() {
    try {
      const result = await axios.put(
        "https://jsonplaceholder.typicode.com/posts/1",
        formData
      );

      console.log("Updated Data:", result.data);
    } catch (error) {
      console.log("Update Error:", error);
    }
  }

  return (
    <div>
      <input
        type="text"
        name="fullName"
        placeholder="Enter Name"
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        onChange={handleChange}
      />

      <br />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateData;