<template>
    <div>
      <h1>Add Employee</h1>
      <input v-model="name" placeholder="Name" />
      <input v-model="pin" placeholder="PIN" type="number"/>
      <input v-model="hourly_wage" placeholder="Hourly Wage" type="number"/>
      <button @click="addEmployee">Add Employee</button>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    data() {
      return {
        name: '',
        pin: '',
        hourly_wage: '',
        message: ''
      };
    },
    methods: {
      async addEmployee() {
        try {
          const newEmployee = {
            name: this.name,
            pin: this.pin,
            hourly_wage: this.hourly_wage
          };
          const response = await api.addEmployee(newEmployee);
          this.message = response.data.message;
          this.name = '';
          this.pin = '';
          this.hourly_wage = '';
        } catch (error) {
          this.message = 'Error: ' + error.response.data;
        }
      }
    }
  };
  </script>
  