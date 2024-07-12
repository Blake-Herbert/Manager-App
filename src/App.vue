<template>
  <div>
    <EmployeeList />
    <AddEmployee />
  </div>
</template>

<script>
import EmployeeList from './components/EmployeeList.vue';
import AddEmployee from './components/AddEmployee.vue';

export default {
  components: {
    EmployeeList,
    AddEmployee
  }
};
</script>
