import Layout from "../layouts/Layout";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const loadData = async () => {
    const rs = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await rs.json();
    setPosts(json);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Layout>
      <div>
        {posts.map((post, key) => (
          <Post key={key} title={post.title}>
            {post.body}
          </Post>
        ))}
      </div>
    </Layout>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
};

export default PostList;
