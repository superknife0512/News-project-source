<template>
    <renderPage :whatData="getHotData" :namePage="'Hot News'"></renderPage>
</template>

<script>
export default {
    computed:{
        getHotData(){
            return this.$store.state.hotData;
        }
    }
}
</script>


