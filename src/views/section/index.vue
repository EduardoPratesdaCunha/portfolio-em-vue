<script>

</script>
<template>
    <section class="container">
        <p> 
            Eu sou desenvolvedor Laravel e estou me aprimorando com VueJs. 
            Estou em busca de oportunidades como desenvolvedor, tanto na área front-end quanto back-end, com o objetivo de aprimorar minhas habilidades.
            Sou autodidata, gosto de desafios e solucionar problemas.
            Acredito que a resolução de problemas é uma oportunidade de aprendizado constante, abrindo caminho para novas soluções.
        </p>
        <img 
            src="../../assets/images/photos/logo.jpg" 
            alt="minha foto, sou branco, cabelos longos e liso, olhos castanhos e com barba."
        >
    </section>
</template>

<style>
.container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw;
    margin: 1em auto;
    text-align: center;
}

.container p{
    text-align: justify;
    margin: 2em;
    line-height: 2em;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
}

.container img{
    margin: auto 5em;
    width: 600px;
    height: 500px;
    border-radius: 15px;
}

@media only screen and (max-width: 1110px) {
    .container p{
        margin: 0;
        line-height: 1.5em;
        letter-spacing: 0px;
        font-size: 18px;
        text-align:justify;
    }
    .container img{
        width: 480px;
        height: 300px;
    }
}
@media only screen and (max-width: 820px) {
    .container p{
        line-height: 1.5em;
        font-size: 16px;
        text-align: justify;
    }
    .container img{
        margin: auto 0.8em auto 2em;
        width: 370px;
        height: 300px;
    }
}
@media only screen and (max-width: 650px) {
    .container p{
        font-size: 15px;
        text-align: justify;
    }
}
@media only screen and (max-width: 590px) {
    .container p{
        line-height: 1.1em;
        font-size: 14px;
        text-align: justify;
    }
    .container img{
        margin: auto 0 auto 1em;
        width: 340px;
        height: 270px;
    }
}
@media only screen and (max-width: 460px) {
    .container{
        flex-direction: column;
    }
    .container p{
        line-height: 1.7em;
        font-size: 15px;
        text-align: justify;
    }
    .container img{
        margin: 3em 2em;
        width: 250px;
        height: 300px;
    }
}



</style>
