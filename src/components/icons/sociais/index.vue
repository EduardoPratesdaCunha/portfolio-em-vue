<script>
import GithubIcon from '../github/index.vue'
import LinkedinIcon from '../linkedin/index.vue'

export default {
  components: {
    GithubIcon,
    LinkedinIcon
  }
}
</script>

<template>
    <div class="contats sociais--footer">
      <GithubIcon />
      <linkedinIcon />
    </div>
</template>
  

<style>
    .contats {
        display: flex;
        margin-top: 10px;
    }

    .contats a {
        margin-left: 15px;
    }

    @media only screen and (max-width: 768px) {
    }


</style>

  