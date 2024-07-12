import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getEmployees() {
    return apiClient.get('/employees');
  },
  addEmployee(employee) {
    return apiClient.post('/employees', employee);
  },
  removeEmployee(id) {
    return apiClient.delete(`/employees/${id}`);
  },
  updatePin(id, pin) {
    return apiClient.put(`/employees/${id}/pin`, { pin });
  }
};
