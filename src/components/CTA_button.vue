<template>
    <a href="#" class="cta" @click="moveDetail()">
        <slot></slot>
    </a>
</template>

<script>
export default {
    props:['id'],

    methods:{
        moveDetail(){
            this.$router.push({path: `/${this.id}`})
        }
    }
}
</script>


<style lang="scss">
    .cta{
        transition: all .2s;
        display: inline-block;
        text-transform: uppercase;
        &:link, &:visited{
            padding: .5rem 1.4rem;
            background-image: linear-gradient(124deg, #FBAB7E 0%, #F7CE68 100%);
            color: #333;
            border-radius: 200rem;
            text-decoration: none;
        }
        &:hover{
           transform: translateY(-.3rem);
            box-shadow: .1rem 0 1rem rgba(0, 0, 0, .3)
        }
    }
</style>

