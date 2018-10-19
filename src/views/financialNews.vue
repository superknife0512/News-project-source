<template>
    <renderPage :whatData="getHotData" :namePage="'Financial News'"></renderPage>
</template>

<script>
export default {
    computed:{
        getHotData(){
            return this.$store.state.financeData;
        }
    }
}
</script>