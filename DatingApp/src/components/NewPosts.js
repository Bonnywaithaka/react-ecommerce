import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AddPost, AddPoststyled } from "../styledComponents/NewPost.styled";

const NewPosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  async function AddNewPost(e) {
    if (title !== "" && content !== "") {
      e.preventDefault();
      alert("Post Added successfull");
      {
        let item = { title, content, image, price };
        console.log(item);
        let result = await fetch(
          "http://sprinbbootawstestapp-env.eba-cs5nbew8.eu-west-3.elasticbeanstalk.com/addPost",
          {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
              "Content-Type": "application/json",
              Accept: "apllication/json",
            },
          }
        );
        result = await result.json();
        console.log(result);
      }
    } else {
      alert("failed! firstname or lastname or email cant be blank!!!!");
    }
  }

  return (
    <AddPost>
      <h1>Add New Post</h1>
      <AddPoststyled>
        <input
          type="text"
          placeholder="title"
          event={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Content"
          event={title}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="ref"
          placeholder="Image Link"
          event={title}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Price"
          event={title}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={AddNewPost}>Add</button>
      </AddPoststyled>
    </AddPost>
  );
};

export default NewPosts;
