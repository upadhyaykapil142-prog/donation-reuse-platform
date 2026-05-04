import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const createDonation = (data) => API.post("/donations", data);
export const getDonations = () => API.get("/donations");
export const deleteDonation = (id) => API.delete(`/donations/${id}`);