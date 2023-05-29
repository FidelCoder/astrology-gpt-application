import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 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`
  }
});

export default api;
