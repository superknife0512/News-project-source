<template>
    <div class="container">
        <h3 class="title">
            Your result
        </h3>

        <div class="result-area">
            <newsCard v-for="arti in getSearch" 
                      :key="arti.title"
                      :news="arti"></newsCard>
            <h4 class="warning" v-show="getSearch === null">Seem like you can find things here! Sorry</h4>
        </div>
    </div>
</template>

<script>
import newsCard from '../components/newsCard';
export default {
    data(){
        return{
        }
    },
    computed:{
        getSearch(){
            return this.$store.state.searchResult
        }
    },
    components:{
        newsCard,
    }
}
</script>

<style lang="scss">
    .title{
        margin-top: 3rem;
    }
    .result-area{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20.5rem, 22rem));
        grid-column-gap: 1.5rem;
        grid-row-gap: 4rem;
    }
</style>
