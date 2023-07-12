<script>
// import { RouterLink, RouterView } from 'vue-router'
import HeaderPage from './views/intro/index.vue';
import ContentPage from './views/content/index.vue';
import SectionPage from './views/section/index.vue';
import FooterPage from './views/footer/index.vue';

export default {
  components: {
    HeaderPage,
    ContentPage,
    SectionPage,
    FooterPage,
  }
}
</script>

<template>
    <header>
        <div>
        <nav>
            <HeaderPage />
        </nav>
        </div>
    </header>
    <ContentPage />
    <SectionPage />
    <FooterPage />
    <!-- <RouterView /> -->
</template>


