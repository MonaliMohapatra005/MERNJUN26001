import axios from "axios";
import React, { useState } from "react";

function DeleteData() {
  const [id, setId] = useState("");

  async function handleDelete() {
    try {
      const result = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      console.log("Deleted Successfully");
      console.log(result.data);

      setId("");
    } catch (error) {
      console.log("Delete Error:", error);
    }
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteData;