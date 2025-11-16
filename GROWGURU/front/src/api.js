import axios from 'axios';

// Configuração da URL base da API
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  console.log('Token being sent:', token); // Log do token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log('Full Authorization header:', config.headers.Authorization); 
  } else {
    console.warn('No token found in localStorage');
  }
  return config;
});

// Adicione no frontend/src/api.js
//api.post('/carteira', data, config) // Já existe na configuração base

export { api };