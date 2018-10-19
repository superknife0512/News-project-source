<template>
        <section class="hot-news" >
            <div class="hot-news__recommend">
                <h4 class="hot-news__title">Recommend</h4>
                <div class="hot-news__recom-area">
                    <recommend v-for="news in getAllData" 
                               :key="news.title"
                               :source="news.url">
                        {{ news.title }}
                    </recommend>
                </div>
            </div>
            <!-- change thing here -->
            <div class="hot-news__area">
                
                <h4 class="hot-news__title">{{namePage}}</h4>
                <p class="hot-news__content">In here, You can get whatever you want around the world</p>
                <newsCard v-for="news in resultPerPage" 
                        :key="news.title"
                        :news="news"></newsCard>
            </div>

            <div class="hot-news__ads">
                <img src="../assets/banner.png" alt="banner" class="hot-news__ads--banner">
            </div>
            <div class="hot-news__pagination">
                 <b-pagination @click="renderUI" size="md" :total-rows="getHotdata.length" v-model="currentPage" :per-page="9">
                </b-pagination>
            </div>
        </section>
</template>

<script>
import newsCard from '../components/newsCard';
import recommend from '../components/recommend';
export default {
    created(){
       this.renderUI(1)
    },

    props:['whatData', 'namePage'],

    components:{
        newsCard,
        recommend,
    },

    data(){
        return{
            // resultPerPage: '',
            currentPage: 1,
        }
    },

    computed:{
        getHotdata(){
            return this.whatData;
        },
        getAllData(){
            return this.$store.state.allData.slice(4,14);
        },
        resultPerPage(){
            let start = (this.currentPage-1)*9;
            let end = this.currentPage*9;
            return this.getHotdata.slice(start,end);
        }

        
    },
    methods:{
    }
}
</script>

<style lang="scss" >
.hot-news{
    display: grid;
    grid-template-columns: [sidebar-start] minmax(15rem,1fr) [sidebar-end news-start] minmax(min-content,1141px) [news-end ad-start] minmax(10rem,1fr) [ad-end];
   
   @media only screen and (max-width: 800px){
        grid-template-columns: [sidebar-start] minmax(1rem,1fr) [sidebar-end news-start] minmax(min-content,1141px) [news-end ad-start] minmax(1rem,1fr) [ad-end];
    }
    
    &__recommend{  
        @media only screen and (max-width: 800px){
            grid-column: news-start/news-end
        }
    }
    &__area{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(21.01rem, 1fr));
        grid-template-rows: min-content;
        grid-column-gap: 3rem;
        grid-row-gap: 2rem;

        @media only screen and (max-width: 800px){
                grid-column: news-start/news-end;
                grid-row: 1/2;
        }
    }
    &__title{
        padding: .6rem 0;
        color: rgb(255, 123, 0);
        border-bottom: 1px solid rgba($color: #000000, $alpha: .2);
        grid-column: 1/-1;
        transform: translateY(1.4rem)
    }
    &__content{
        color: #555;
        grid-column: 1/-1;
        transform: translateY(-.7rem)
    }
    &__recommend{
        padding: 0 2rem;
    }
    &__recom-area{
        display: flex;
        flex-direction: column;
        transform: translateY(1.4rem)
    }
    &__ads{
        padding: .2rem;
        margin-top: 2.3rem;

        &--banner{
            width: 100%;
            
            @media only screen and (max-width: 800px){
                display: none;
            }
        }
    }
    &__pagination{
        grid-column: news-start /news-end;
        margin-top: 3rem
    }
    
}


</style>