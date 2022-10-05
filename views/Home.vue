<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <SearchBox  @searchKey="searchBook"  />
    <hr>
    <CartBookList msg="Welcome to Your Vue.js Book Store"/>
  </div>
</template>


<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import CartBookList from '../components/CartBookList.vue'
    import SearchBox from '../components/SearchBox.vue'

    import { mapActions } from 'vuex';
    import { mapMutations } from 'vuex';

    export default {
        name: "HomePage",
        props : {
            msg:String,
        },
        components : {CartBookList, SearchBox},
        data: () => ({
            contactes : [],
            searchBy : true,
        }),
        methods:{
        
         ...mapActions(['loadBooks']), 
         ...mapMutations(['setTermToSearch']), 
         // chercher une cle
         searchBook(terms){
            console.log("la cle a chercher ==> " + terms)
            this.setTermToSearch(terms)
            // refaire la recherche des livres
            this.loadBooks(terms);
            },
    
        },
    
    }
</script>