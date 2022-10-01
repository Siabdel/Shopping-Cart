<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  
    <BookList msg="Welcome to Your Vue.js Book Store"/>
  </div>
</template>

<script>
import BookList from './views/BookList.vue'
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    BookList
  },
  methods :{
    ...mapActions(['loadBooks'])
  },
  created(){
    this.loadBooks();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
