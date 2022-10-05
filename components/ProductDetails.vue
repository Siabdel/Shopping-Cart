<template>
   <!--Main layout-->
  <main class="mt-5 pt-4">
    <div class="container dark-grey-text mt-5">

      <!--Grid row-->
      <div class="row wow fadeIn">
			<h1> *** {{ getBookSelected.volumeInfo.title }} ***</h1>

        <!--Grid column-->
        <div class="col-md-6 mb-4">
		  <img :src="photo" alt="">
		  <!-- <img :src="{{ getBookSelected.volumeInfo.imageLinks.thumbnail }}" alt=""> -->
		</div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-6 mb-4">

          <!--Content-->
          <div class="p-4">

            <div class="mb-3">
              <a href="">
                <span class="badge purple mr-1">Category 2</span>
              </a>
              <a href="">
                <span class="badge blue mr-1">New</span>
              </a>
              <a href="">
                <span class="badge red mr-1">Bestseller</span>
              </a>
            </div>

            <p class="lead">
              <span class="mr-1">
                <del> {{ prix }} </del>
              </span>
              <span>$100</span>
            </p>

            <p class="lead font-weight-bold">Description</p>

            <p> {{ getBookSelected.volumeInfo.description }}</p>

            <form class="d-flex justify-content-left">
              <!-- Default input -->
              <input type="number" value="1" aria-label="Search" class="form-control" style="width: 100px">
              <button class="btn btn-primary btn-md my-0 p" type="submit">Add to cart
                <i class="fas fa-shopping-cart ml-1"></i>
              </button>

            </form>

          </div>
          <!--Content-->

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

      <hr>

      <!--Grid row-->
      <div class="row d-flex justify-content-center wow fadeIn">

        <!--Grid column-->
        <div class="col-md-6 text-center">

          <h4 class="my-4 h4">Additional information</h4>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit
            voluptates,
            quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

      <!--Grid row-->
      <div class="row wow fadeIn">

        <!--Grid column-->
        <div class="col-lg-4 col-md-12 mb-4">

          <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" class="img-fluid" alt="">

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4">

          <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" class="img-fluid" alt="">

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4">

          <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" class="img-fluid" alt="">

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

    </div>
  </main>
</template>

<script>
    
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { mapMutations, mapGetters } from "vuex" 
	
    export default {
        name : "ProductDetails",
		data(){
			return {
				msg : "Produit " ,
				book : null,
				path : "images/photo.png"
			}
		},
		computed : {
			...mapGetters(["getBookSelected"]),
			produit(){
				this.getBookSelected
				//console.log("titre = " + this.getBookSelected)
				return `${this.getBookSelected.volumeInfo.title}`
			},
			photo(){
				return `${this.getBookSelected.volumeInfo.imageLinks.thumbnail}`
			},

			prix(){
				if (!!this.getBookSelected.saleInfo.listPrice.amount){
					return `${this.getBookSelected.saleInfo.listPrice.amount}`
				}else{
					return 0.0 
				}
			}
			
		},
		methods:{
			...mapMutations(['setSelectedBook']),
		},

		created(){
			let bookId = this.$route.params.id
			this.setSelectedBook(bookId)
		}

    }
</script>