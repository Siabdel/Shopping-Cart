import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({

    state : {
        books : [],
        isLoading : false,
        selectedBookId : null,
    },

    getters : {},

    mutations : {
        setBooks(state, {books}){
            state.books = books
        },

        setIsLoading(state, bool){
            state.isLoading = bool;
        },
        setSelectedBook(state, id){
            state.selectedBookId = id;
        },

    },
    actions : {

        loadBooks( {commit }){
            
            //let url = `https://www.googleapis.com/books/v1/volumes?q=search+vue.js&key=AIzaSyDCdbg3vdrRVokCr6E2-ADtbWT80NqMV_0`
            let url = `https://www.googleapis.com/books/v1/volumes?q=search+vue.js`
            //let url = 'http://atlass.fr:93/apipro/directories/'
            //let url = 'https://randomuser.me/api/?nat=fr,Fr&results=10&seed=abc'


            commit("setIsLoading", true)
            // fetch 
            return axios
            .get(url)
            .then(res => {
                setTimeout( ()=>
                    {
                    commit("setIsLoading", false)
                    commit("setBooks", { books : res.data.items });
                    }, 3500
                )
                console.log("  Books loaded ..." + res.data.items.length)
            })
            .catch(error => {
                console.log("Erreur loading data from " + error)
                commit("setIsLoading", false)
                }
            )
        }       
    }
})