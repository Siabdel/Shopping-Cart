<template>
    <div class="container-fluid">
        <h1> {{ msg }} </h1>
    <ul class="list-group">
        <li class="list-group-item ">
          <router-link to="/books-card"> Mes books  </router-link>
        </li>
        <li class="list-group-item"> 
          <router-link to="/books"> liste des livres </router-link>
        </li>
    </ul>
    <router-view> </router-view>
    </div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data(){
    return {
      msg : "Shopping Cart"
    }
  },

  methods :{
    ...mapActions(['loadBooks']), 
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
