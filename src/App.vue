
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">

      <router-link class="navbar-brand" to="/" tag="a" href="#">
        <img src="./assets/logo.png" alt="" class="navbar__logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          
            <router-link class="nav-item" 
                        tag="li" 
                        to="/"
                        active-class="active" exact>
                        <a class="nav-link">
                          home
                          <span class="sr-only">(current)</span>
                        </a> 
            </router-link>

            <router-link class="nav-item" 
                        tag="li" 
                        :to="link.url"
                        active-class="active"
                        v-for="link in links" 
                        :key="link.name">
                        <a class="nav-link">
                          {{link.name}}
                        </a> 
            </router-link>
          
          
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" 
                aria-label="Search"
                v-model="searchRes">
          <button class="btn btn-outline-warning my-2 my-sm-0" 
                  type="submit"
                  @click.prevent="submitRes()">Search</button>
        </form>
      </div>
      </div>
    </nav>

    <loader v-if="isLoading"></loader>

    <keep-alive>
      <router-view>
        <!-- some thing inside here -->
      </router-view>
    </keep-alive>

    <Vfooter></Vfooter>
  </div>
</template>

<script>
import Vfooter from './components/footer'
export default {
  data(){
    return{
      links:[
        {
          url:'/hotNews',
          name: 'hot news'
        },
        {
          url:'/financialNews',
          name: 'financial news'
        },
        {
          url:'/otherNews',
          name: 'other news'
        },
      ],
      searchRes:'',
    }
  },
  components:{
    Vfooter,
  },
  computed:{
    isLoading(){
      return this.$store.state.loadingState;
    }
  },
  methods:{
    submitRes(){
      this.$router.push({path: `/search-page`});
      this.$store.dispatch('searchRes', this.searchRes.toLowerCase());
      this.searchRes='';
    }
  }
};
</script>

<style lang="scss">
  .nav-link{
    text-transform: capitalize;
  }
  // .router-link-exact-active{
  //   color: white;
  // }
  .active{
    a{
      color: #F7CE68 !important;
    }
  }
  .navbar__logo{
    height: 4.6rem;
  }
</style>
