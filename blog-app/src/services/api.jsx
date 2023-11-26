// api.js
import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com"; 

const api = axios.create({
  baseURL: API_BASE_URL,
});

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
