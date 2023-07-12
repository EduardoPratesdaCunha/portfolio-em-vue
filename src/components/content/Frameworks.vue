<script>
export default {
    data(){
        return{
            frameworks: [
                { id: 1, name:'Bootstrap 5' },
                { id: 2, name:'TailwindCss'},
                { id: 3, name:'Laravel 8' },
                { id: 4, name:'VueJs 3.^' },
            ]
        }
    }
}
</script>

<template>
    <ul class="frameworks">
        <li class="frameworkList">
            <h3>Os frameworks:</h3>
        </li>
        <li 
            class="frameworkList"
            v-for="framework in frameworks"
            :key="framework.id"
        >
            {{ framework.name }}

        </li>
        
    </ul>
</template>

<style>
.frameworks{
    margin-top: 3em;
}
.frameworkList h3{
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.1em;
    margin-bottom: 0.5em;
}
.frameworkList{
    margin-bottom: 0.6em;
    letter-spacing: 0.1em;
}

@media only screen and (max-width: 768px) {
    .frameworks{
        margin-top: 1.5em;
    }
    .frameworkList h3{
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.2em;
        margin-bottom: 0.5em;
    }
    .frameworkList{
        margin-bottom: 0.4em;
        letter-spacing: 0.1em;
    }
}
@media only screen and (max-width: 395px) {

    .frameworkList{
        font-size: 16px;
    }
    .frameworkList h3{
        font-size: 18px;
    }
}
@media only screen and (max-width: 340px) {
    .frameworks{
        margin-right: 5px;
    }
    .frameworkList h3{
        text-align: center;
        letter-spacing: 0;

    }
    .frameworkList{
        text-align: center;
    }
}
</style>