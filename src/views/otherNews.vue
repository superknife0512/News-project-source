<template>
    <renderPage :whatData="getHotData" :namePage="'Other news'"></renderPage>
</template>

<script>
export default {
    computed:{
        getHotData(){
            return this.$store.state.allData;
        }
    }
}
</script>
