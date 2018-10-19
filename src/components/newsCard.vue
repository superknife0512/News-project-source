
<template>
    <div class="popular__news">
      <figure class="popular__img-holder">
        <img :src="news.urlToImage" :alt="news.urlToImage" class="popular__img">
        <figcaption class="popular__date">{{ news.publishedAt | dateFilter}}</figcaption>
        <span class="popular__hidden">
            {{ news.description }}
        </span>
      </figure>
      <div class="popular__info ">
        <h4 class="popular__title">{{news.title | titleFilter}}</h4>
        <h5 class="popular__author">{{news.author === null? 'Unknow author' : news.author}}</h5>
        <cta-btn class="align-right" :id="newId">
          Learn more
        </cta-btn>
      </div>
    </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },

    props:['news'],

    filters:{
        titleFilter(value){//52 string
            let count = 0;
            const strArr = value.split(' ');
            let newArr = [];
            if(strArr.length > 10){                
                for(let char of strArr){
                    if(count + char.length < 50){
                        count +=char.length;
                        newArr.push(char);
                    }
                }
            return `${newArr.join(' ')}...`
            } else {
                return value;
            }
        }
    },
    computed:{
        newId(){
            return this.news.title.split(' ').join('-')
        }
    }
}
</script>

<style lang="scss" scoped>
.popular{
    &__news{

        box-shadow: 3px 2px 38px 0px rgba(0,0,0,0.37);

    }
    &__img-holder{
        overflow: hidden;
        position: relative;

    }
    &__img{
      
      height: 15rem;
      width: 100%;      
      object-fit: cover;
      object-position: top;
      filter: brightness(80%);
    }
    &__date{
        position: absolute;
        top: 1rem;
        left: 1rem;
        color: #eee
    }
    &__info{
        padding: 1.5rem 1rem;
        padding-bottom: 2.4rem;   
        display: flex;
        flex-direction: column;
        align-items: flex-start;     
    }
    &__title{
        text-transform: capitalize
    }
    &__author{
        font-size: 1rem;
        margin-bottom: 1.7rem;
        color: #666;
    }
    &__hidden{
        color: #eee;
        background-color: rgba(0, 0, 0, .6);
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1.5rem;
        height: 100%;
        opacity: 0;
        transform: translateY(3rem);
        transition: all .5s;

        &:hover{
            opacity: 1;
            transform: translateY(0);
        }
    }   
  }

  .align-right{
      align-self: flex-end;
  }
</style>

