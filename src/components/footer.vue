<template>
    <nav class="footer">
        <div class="container d-flex justify-content-center">
            <div class="footer__contact">
                <h5 class="footer__contact-info">
                    Email: phanhuutoan9X@gmail.com
                </h5>
                <h5 class="footer__contact-info">
                    Name: Phan Huu Toan
                </h5>
                <a href="https://newsapi.org/" class="footer__contact-web">
                    Power by Newsapi.org
                </a>
            </div>            
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .footer{
        background: #333;
        padding: 2rem 0;
        display: flex;
        justify-content: center;
        border-top: .6rem solid rgb(235, 159, 19);
        text-align: center;
        font-size: inherit;
        margin-top: 4rem;
        &__contact{

        }
        &__contact-info{
            color: #eee;
            font-size: 1.2rem;
            text-transform: capitalize;
        }
        &__contact-web{
            color: rgb(235, 159, 19);
        }
    }
</style>
