<template>
    <div>
      <h1>Employee List</h1>
      <ul>
        <li v-for="employee in employees" :key="employee.id">
          {{ employee.name }} - {{ employee.hours_worked }} hours worked
          <button @click="removeEmployee(employee.id)">Remove</button>
          <button @click="showUpdatePin(employee)">Update PIN</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    data() {
      return {
        employees: []
      };
    },
    created() {
      this.fetchEmployees();
    },
    methods: {
      async fetchEmployees() {
        try {
          const response = await api.getEmployees();
          this.employees = response.data;
        } catch (error) {
          console.error('Error fetching employees:', error);
        }
      },
      async removeEmployee(id) {
        try {
          await api.removeEmployee(id);
          this.fetchEmployees();
        } catch (error) {
          console.error('Error removing employee:', error);
        }
      },
      showUpdatePin(employee) {
        const newPin = prompt(`Enter new PIN for ${employee.name}:`);
        if (newPin) {
          this.updatePin(employee.id, newPin);
        }
      },
      async updatePin(id, pin) {
        try {
          await api.updatePin(id, pin);
          this.fetchEmployees();
        } catch (error) {
          console.error('Error updating PIN:', error);
        }
      }
    }
  };
  </script>
  