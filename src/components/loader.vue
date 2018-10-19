<template>
    <div class="container d-flex align-items-center flex-column loader">        
        <img src="../assets/spinner.svg" alt="yeah" class="loader__img">
        <span class="loader__info">Loading data...</span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .loader{
        padding: 4rem 0 ;
        &__img{
            height: 6rem;
            width: 6rem;
            animation: spin 1.5s infinite linear;
        }
        &__info{
            font-size: 1.4rem;
            text-transform: capitalize;
            margin-top: 1rem;

        }

    }

    @keyframes spin{
        0%{
            transform: rotate(0);
        }
        100%{
            transform: rotate(180deg);
        }
    }
</style>
