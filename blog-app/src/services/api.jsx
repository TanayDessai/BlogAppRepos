import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com"; 

const api = axios.create({
  baseURL: API_BASE_URL,
});

// export const fetchPosts = async () => {
//   try {
//     const response = await api.get("/posts");
//     return response.data.map((post) => ({
//       title: post.title,
//       body: post.body,
//       date: new Date(post.date).toISOString(),
//     }));
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     throw error;
//   }
// };

export const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts.map((post) => ({
      title: post.title,
      body: post.body,
      date: new Date().toISOString(), // Adjust this line
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};



export const getPosts = async (page, limit) => {
  try {
    const response = await api.get("/posts", {
      params: { _page: page, _limit: limit },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post("/posts", postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (postId, postData) => {
  try {
    const response = await api.put(`/posts/${postId}`, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await api.delete(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
