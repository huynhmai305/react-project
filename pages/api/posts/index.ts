import fetch from "isomorphic-fetch";

export const getPosts = async () => {
  const data = fetch("https://jsonplaceholder.typicode.com/posts");
  return data.json();
};

export const getPost = (title) => {
  const data = fetch(
    `https://jsonplaceholder.typicode.com/posts?title=${title}`
  );
  return data.json();
};
