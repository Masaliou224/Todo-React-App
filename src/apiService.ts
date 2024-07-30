import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/'; // Replace with your API URL

export const getTodos = async () => {
  try {
    const response = await axios.get(`${API_URL}/todos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};