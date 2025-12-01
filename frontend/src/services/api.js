import axios from "axios";

const API_BASE_URL = "/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getBlogs = () => api.get("/blogs").then((res) => res.data);
export const getBlog = (id) => api.get(`/blogs/${id}`).then((res) => res.data);
export const createBlog = (blog) =>
  api.post("/blogs", blog).then((res) => res.data);
export const updateBlog = (id, blog) =>
  api.put(`/blogs/${id}`, blog).then((res) => res.data);
export const deleteBlog = (id) =>
  api.delete(`/blogs/${id}`).then((res) => res.data);
