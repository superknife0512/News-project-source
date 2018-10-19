<template>
    <a class="rec-link" :href="source" target="blank"> 
        <i class="fas fa-bolt"></i> <slot></slot>    
    </a>
</template>

<script>
export default {
    props:['source']
}
</script>

<style lang="scss">
    .rec-link{
        color: rgb(231, 68, 117);
        transition: all .3s ease;
        &:hover{
            color: orange;
        }
        &:not(:last-child){
            margin-bottom: 2rem;
        }
    }
</style>
