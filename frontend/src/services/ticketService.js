import axios from 'axios'

const API = import.meta.env.VITE_BASE_URL;

console.log(API)

export const createTicket = (data) => axios.post(`${API}/createTicket`, data);
export const getTickets = (search = "", status = "") => axios.get(`${API}/getAllTickets?search=${search}&status=${status}`)
export const getTicket = (id) => axios.get(`${API}/${id}`)
export const updateTicket = (id, data) => axios.put(`${API}/${id}`, data) 