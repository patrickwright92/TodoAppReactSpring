import axios from 'axios'

// Basic HTTP Client
export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);