import React from "react";
import AddPost from "../components/addPosts/addPost";
import PostList from "../components/postLists/postList";

const Home = () => {
  return (
    <div className="main-container">
      <div className="header">
        <AddPost />
        <PostList />
      </div>
    </div>
  );
};

export default Home;
