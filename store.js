import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({

    state : {
        books : [],
        isLoading : false,
        selectedBookId : null,
        termSearched : null,
    },

    getters : {
        getBookSelected : state => {
            return state.books.find( book => book.id === state.selectedBookId )
            //console.log("getBookSelected : " + bb.volumeInfo.title)
        }
    },

    mutations : {
        setBooks(state, {books}){
            state.books = books;
        },

        setIsLoading(state, bool){
            state.isLoading = bool;
        },
        setSelectedBook(state, id){
            state.selectedBookId = id;
        },

        setTermToSearch(state, term){
            state.termSearched = term;
        },

    },
    actions : {

        loadBooks( {commit }, term){
            
            //let url = `https://www.googleapis.com/books/v1/volumes?q=search+vue.js&key=AIzaSyDCdbg3vdrRVokCr6E2-ADtbWT80NqMV_0`
            //let url = 'http://atlass.fr:93/apipro/directories/'
            //let url = 'https://randomuser.me/api/?nat=fr,Fr&results=10&seed=abc'
            let url = `https://www.googleapis.com/books/v1/volumes?q=search+` + term


            commit("setIsLoading", true)
            // fetch 
            return axios
            .get(url)
            .then(res => {
                setTimeout( ()=>
                    {
                    commit("setIsLoading", false)
                    commit("setBooks", { books : res.data.items });
                    }, 1500
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