<template>
<div>
  <section class="hero-area">

        <div class="hero__content container " >
                <h1 class="hero__title">
                  {{homeData[index].title}}
                </h1>
                <h5 class="hero__des">
                  {{homeData[index].description}}
                </h5>
              <cta-btn :id="makeId">
                read more
              </cta-btn>
        </div>
      
      <div class="hero__navigation">
        <i class="fas fa-arrow-circle-left hero__btn"
            @click="index === 0? index = 1 : index--"></i>
        <i class="fas fa-arrow-circle-right hero__btn"
            @click="index === homeData.length ? index = 0 : index++"></i>
      </div>
  </section>

  <section class="popular container">
    <div class="popular__heading">
      <h4 class="title">
        popular news
      </h4>
    </div>
    
    <div class="popular__news-section">
     <news-card v-for="news in featureNews" 
                :news="news" 
                :key="news.title">
       
     </news-card>
    </div>    
  </section>

  <section class="popular container">
    <div class="popular__heading">
      <h4 class="title">
        Financial News
      </h4>
    </div>
    
    <div class="popular__news-section">
     <news-card v-for="news in financialNews" 
                :news="news" 
                :key="news.title">
       
     </news-card>
    </div>    
  </section>
  
</div> 
  
</template>

<script>
import newsCard from "../components/newsCard";
import { setInterval } from 'timers';

export default {
  created() {
    this.$store.dispatch("getData");
    setInterval(()=>{
      this.index === this.homeData.length ? this.index = 0 : this.index++
    },4000)
  },

  data() {
    return {
      index: 1
    };
  },
  methods: {
  },

  computed: {
    featureNews() {
      return this.$store.getters.featureNews;
    },
    homeData(){
      return this.$store.getters.homeData;
    },
    financialNews(){
      return this.$store.state.financeData.slice(0,3);
    },
    makeId(){
      let newArr = this.homeData[this.index].title.split(' ');
      return newArr.join('-');
    }
  },
  components: {
    newsCard
  }
};
</script>

<style lang="scss" >
.hero-area {
  height: calc(100vh - 6.223rem);
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(../assets/pixel.jpg);
  background-position: center;
  background-size: cover;

  // padding: 0 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.hero {
  &__content {
    // width: 40%;
    color: white;
  }
  &__title {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 2.9rem;
    margin-bottom: 1.5rem;
    font-family: inherit;
  }
  &__des {
    margin-bottom: 1.5rem;
    font-family: inherit;
  }

  &__navigation {
    position: absolute;
    bottom: 3rem;
    right: 7rem;
    @media only screen and (max-width: 800px){
      right: 2rem;
    }
  }

  &__btn {
    font-size: 3rem;
    color: white;
    opacity: 0.7;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
.popular {

    &:not(:last-child){

      padding-bottom: 2rem;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
    }
  
  &__heading {
    margin: 3rem 0;
    text-transform: capitalize;
    font-size: inherit;
  }
  &__news-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2.9rem;
    justify-content: center;
  }
}
.fade{
  animation: fade .5s ease;
}
@keyframes fade{
  0%{
    opacity: 1;
  }

  100%{
    opacity: .4;
  }
}
</style>


