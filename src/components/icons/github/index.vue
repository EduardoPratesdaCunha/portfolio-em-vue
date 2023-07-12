<script>
import github from '../../../assets/images/icons/github.svg'
export default {
    data() {
        return {
            github: github,
        };
    },
};

</script>

<template>
    <div>
        <a href='https://github.com/EduardoPratesdaCunha'>
        <img 
            class="gitIcon"
            :src="github"
            alt='icone com o link da minha rede social do github'>

        </a>        
    </div>
</template>

<style>

.gitIcon{
    width: 45px;
}
@media only screen and (max-width: 580px) {
    .linkedinIcon{
        max-width: 30px;
    }
}

</style>
  