import React, { useState } from "react";
import { useAddPostDataMutation } from "../../app/services/postApiSlice/postApiSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddPost = () => {
  const [inputPost, setInputPost] = useState("");
  const [addPost, { isLoading, isError }] = useAddPostDataMutation();

  const handleInputPost = (e) => {
    setInputPost(e.target.value);
  };
  const handleAddPost = async () => {
    const data = await addPost({
      id: nanoid(),
      title: inputPost,
      isDeleted: false,
    });
    console.log(data, "post returned data");
  };
  return (
    <div className="input-contanier">
      <div>
        <input
          type="text"
          placeholder="Enter Todo..."
          value={inputPost}
          onChange={handleInputPost}
        />
        <button onClick={handleAddPost}>Add</button>
      </div>
    </div>
  );
};

export default AddPost;
