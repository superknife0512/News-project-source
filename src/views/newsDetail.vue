<template>
    <div>
        <div class="newsDetail container">
            <h3 class="newsDetail__title">
                {{getallData.title}}
            </h3>
            <div class="newsDetail__info">
                <span class="newsDetail__date"><i class="fas fa-table newsDetail__icon"></i>{{getallData.publishedAt | dateFilter}}</span>
                <span class="newsDetail__author"><i class="fas fa-pen-fancy newsDetail__icon"></i>{{getallData.author === null? 'unknow' : getallData.author}}</span>
            </div>
            <h5 class="newsDetail__short">
                {{getallData.description}}
            </h5>
            <img :src="getallData.urlToImage" :alt="getallData.title" class="newsDetail__img">
            <p class="newsDetail__content">
                {{getallData.content}}
            </p>
            <a :href="getallData.url" target="blank">Go to source page</a>
        </div>
        
        <div class="container">
            <h4 class="title">You may like this</h4>
            <div class="news__area">
                <news-card v-for="eachNew in getNews" 
                            :key="eachNew.title" 
                            :news="eachNew"></news-card>
            </div>
        </div>
    </div>    
</template>

<script>
import newsCard from '../components/newsCard'
export default {
    props: ['id'],

    computed:{
        newId(){
            return this.id.split('-').join(' ');
        },

        getallData(){
            return this.$store.getters.getallData(this.newId);
        },

        getNews(){
            const start= Math.floor(Math.random()*0 + 10);
            const end = start + 6;
            return this.$store.state.allData.slice(start,end);
        }
       
    },
    method:{
        
    },
    components:{
        newsCard,
    },
}
</script>


<style lang="scss">
    .title{
        margin: 1.4rem 0;
    }
    .newsDetail{
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba($color: #000000, $alpha: .2);
        &__title{
            font-size: 2.4rem;
            margin-top: 5rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid rgba($color: #000000, $alpha: .2);
            text-transform: capitalize;
            font-weight: 600;
            color: rgb(235, 102, 14);
        }
        &__short{
            margin: 1.5rem 0;
            font-size: 1.2rem;
            color: #555;

        }
        &__img{
            width: 100%;
            height: 35rem;
            object-fit: cover;
            object-position: center;
        }
        &__content{
            margin: 2rem 0;
        }
        &__info{
            display: flex;
            align-items: center;
        }
        &__date{
            margin-right: 1.5rem;
            color: #555;
        }
        &__author{
            
            color: #555;
        }
        &__icon{
            font-size: 1.1rem;
            color: #555;
            margin-right: .5rem;
        }
        
    }
    .news__area{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        grid-gap: 2.9rem;
        justify-content: center;
    }
</style>


