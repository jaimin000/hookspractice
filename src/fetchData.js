import axios from "axios";
import React, { useState, useEffect } from "react";

function FetchData() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState("");
  const [buttonId, setButtonId] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
      .then((result) => {
        setPosts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [buttonId]);
  return (
    <>
      <h1>fetch Data</h1>
      <input
        type="text"
        placeholder="Enter a Post Id here"
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button onClick={() => setButtonId(id)}>Fetch Data</button>
      <ul>
        {/* {posts.map((post) => ( */}
        <li>{posts.title}</li>
        {/* ))} */}
      </ul>
    </>
  );
}

export default FetchData;
