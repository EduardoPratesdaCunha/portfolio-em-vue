<script>
export default {
    data(){
        return{
            languages: [
                { id: 1, name: 'HTML 5' },
                { id: 2, name: 'CSS 3' },
                { id: 3, name: 'PHP 8.^' },
                { id: 4, name: 'JavaScript' },
                { id: 5, name: 'PostgreSQL' },
            ]
        }
    }
}
</script>
<template>
    <ul class="languages">
        <li class="languagesList">
            <h3>As linaguagens:</h3>
        </li>
        <li 
            class="languagesList"
            v-for="language in languages"
            :key="language.id"
            >

            {{ language.name }}
        </li>
        
    </ul>
</template>
<style>
.languages{
    margin-bottom: 2em;
}
.languagesList h3{
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.1em;
    line-height: 1em;
}
.languagesList{
    margin-bottom: 0.6em;
    letter-spacing: 0.1em;
}


@media only screen and (max-width: 768px) {
    .languagesList h3{
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.1em;
        margin-bottom: 0;
    }
    .languagesList{
        margin-bottom: 0.4em;
        letter-spacing: 0.1em;
    }

}
@media only screen and (max-width: 395px) {

    .languagesList{
        font-size: 14px;
        margin-bottom: 0.6em;

    }
    .languagesList h3{
        font-size: 18px;
    }
}
@media only screen and (max-width: 340px) {
    .languages{
        margin-left: 5px;
    }
    .languagesList h3{
        text-align: center;
        letter-spacing: 0;

    }
    .languagesList{
        text-align: center;
    }
}

</style>
