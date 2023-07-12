<script>
import FrameworksList from '@/components/content/Frameworks.vue'
import LanguagesList from '@/components/content/Languages.vue'

export default {
    components:{
        FrameworksList,
        LanguagesList,
    }
}
</script>

<template>
    <section class="content">
        <img 
            src="../../assets/images/photos/apresentacao.png" 
            alt='imagem no site em formato responsivo e em formato normal.' 
        />
        <div class="content--lists">
            <FrameworksList />
            <LanguagesList />
        </div>


    </section>
</template>
<style>
.content{
    display: flex;
    align-items: center;
    background-image: 
        linear-gradient(
            #fff,
            #e8881a,
            50%,
            #07b9b3,
            #fff
        );
    justify-content: center;
}
.content img {
    width: 800px;
    height: 500px;
    margin: 8em 3em;
    border-radius: 15px;
}
.content--lists{
    font-size: 18px;
    text-align: start;
    margin: 0 5em 5em 5em;
}

@media only screen and (max-width: 1670px) {
    .content img{
        width: 650px;
        height: 450px;
    }
}

@media only screen and (max-width: 1275px) {
    .content{
        padding-top: 2em;
    }
    .content img{
        width: 670px;
        height: 400px;
    }
    .content--lists{
        font-size: 18px;
        margin: 2.5em;
    }
}
@media only screen and (max-width: 1110px) {
    .content{
        padding-top: 2em;
    }
    .content img{
        width: 570px;
        height: 400px;
        margin: 6em 5em;
    }
    .content--lists{
        font-size: 18px;
        margin: 2.5em;
    }
}
@media only screen and (max-width: 1000px) {
    .content img{
        width: 500px;
        height: 350px;
    }
    .content--lists{
        font-size: 16px;
        margin: 1em;
    }
}
@media only screen and (max-width: 915px) {
    .content img{
        width: 450px;
        height: 300px;
    }
    .content--lists{
        font-size: 16px;
        margin: 0;

    }
}
@media only screen and (max-width: 870px) {
    .content img{
        height: 300px;
        margin: 6em 0;
    }
    .content--lists{
        font-size: 14px;
        margin-left: 5em
    }
}
@media only screen and (max-width: 768px) {
    .content img{
        width: 350px;
        height: 300px;
    }
    .content--lists{
        font-size: 14px;
    }
}
@media only screen and (max-width: 650px) {
    .content{
        padding: 5em 0;
    }
    .content img{
        width: 250px;
        height: 200px;
        margin: 3em 3em;
    }
    .content--lists{
        font-size: 14px;
    }
}
@media only screen and (max-width: 555px) {
    .content{
        padding: 5em 0;
    }
    .content img{
        margin: 3em 1em;
    }
    .content--lists{
        font-size: 13px;
    }
}
@media only screen and (max-width: 490px) {
    .content{
        flex-direction: column;
        padding: 5em 0;
    }
    .content img{
        width: 380px;
        height: 300px;
        margin: 3em 3em;
    }
    .content--lists{
        display: flex;
        font-size: 16px;
        margin-left: 2em;
        
    }
    .frameworks{
        margin: 0 1em;
        line-height: 2em;

    }
    .languages{
        margin: 0 1em;
        line-height: 2em;
    }
}
@media only screen and (max-width: 395px) {
    .content img{
        width: 300px;
        height: 260px;
    }
    .frameworks{
        margin: 0 0.4em;
        line-height: 2em;

    }
    .languages{
        margin: 0 0.4em;
        line-height: 2em;
    }
}
@media only screen and (max-width: 357px) {
    .content img{
        width: 320px;
        height: 240px;
    }
    .frameworks{
        font-size: 13px;
    }
    .languages{
        line-height: 2em;
    }
    .content--lists{
        font-size: 14px;
    }
}
@media only screen and (max-width: 340px) {
    .content{
        flex-direction: column;
        background:linear-gradient(#fff,#9198e5,#e66465,#fff);
        padding: 5em 0;
    }
    .content img{
        width: 250px;
        height: 200px;
        margin: 3em 3em;
    }
    .content--lists{
        font-size: 12px;
    }
    .languages{
        font-size: 12px;
        margin-top: 3px;
    }
    .content--lists{
        font-size: 12px;
        margin-left: 0;
    }
    .frameworks{
        font-size: 12px;
    }
}
</style>
