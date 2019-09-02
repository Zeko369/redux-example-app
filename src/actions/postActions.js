import { FETCH_POSTS, NEW_POST } from "./types";

const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
      dispatch({ type: FETCH_POSTS, payload: posts });
    });
};

const newPost = (title, body) => dispatch => {
  const post = {
    title,
    body
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(post => dispatch({ type: NEW_POST, payload: post }));
  // dispatch({ type: NEW_POST, payload: { ...post, id: 123 } });
};

export { fetchPosts, newPost };
