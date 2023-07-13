<script>
import {ref} from 'vue'
import Sociais from '@/components/icons/sociais/index.vue'

export default {
  components: {
    Sociais,
  },
  setup(){
    const showTitle = ref(true)



    const beforeEnter = () => {
        // console.log('before Enter')
    }
    const enter = () => {
        // console.log('Enter')
        
    }
    const afterEnter = () => {
        // console.log('after Enter')
        setTimeout(() => showTitle.value = true, 2000)
    }

    const beforeLeave = () => {
        // console.log('before Leave')
    }
    const leave = () => {
        // console.log('Leave')
        
    }
    const afterLeave = () => {
        // console.log('after Leave')
        setTimeout(() => showTitle.value = false, 2000)
    }


    return {
        showTitle, 
        beforeEnter, 
        enter, 
        afterEnter,
        beforeLeave,
        leave,
        afterLeave,
    }  
  },
};
</script>
<template>
    <div className='intro'>
        <div className='titles'> 
            <h1>
                Eduardo Prates
                <Sociais />
            </h1>                
            <h2>Desenvolvedor 
                <transition appear name="fade"
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-Leave="afterLeave"

                >
                    <strong v-if="showTitle">Full Stack</strong>                    
                </transition>
            </h2>
        </div>
    </div>
</template>
  


<style>
.intro{
    max-width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10em;
    background-color: rgb(255, 255, 255);
    justify-content: center;
}

.intro img{
    width: 40px;
}
.titles{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.titles h1,h2{
    color: rgb(43, 43, 43);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin: -10px 0;

}
.titles h1{
    display: flex;
    align-items: center;
    max-width: 90%;
    justify-content: space-between;
    font-size: 35px;
    font-weight: bold;
}

.titles h2{
    display: flex;
    flex-direction: column;
    font-size: 20px;
    margin-top: 5px;
}
strong{
    font-weight: bold;
    font-size: 100px;
    width: 40vw;
}
.fade-enter-from{
    opacity: 0;
}
.fade-enter-active{
    transition: opacity 2s ease;
}
.fade-leave-to{
    opacity: 0;
}
.fade-leave-active{
    transition: opacity 2s ease;
}

@media only screen and (max-width: 1651px) {
    .intro{
        text-align: left;
        font-size: 15px;
    }
    strong{
        width: 50vw;
    }
}
@media only screen and (max-width: 1540px) {
    .intro{
        text-align: left;
        font-size: 15px;
    }
    strong{
        width: 50vw;
    }
}
@media only screen and (max-width: 1320px){
    .intro{
        text-align: left;
        font-size: 15px;
    }
    .titles h1{
        max-width: 80%;
    }
    strong{
        width: 60vw;
    }

}
@media only screen and (max-width: 1110px) {
    .titles h1{
        max-width: 90%;
    }
    strong {
        width: 70vw;
    }
}
@media only screen and (max-width: 950px) {
    strong {
        width: 80vw;
    }
}
@media only screen and (max-width: 826px) {

    strong {
        font-size: 80px;
        width: 90vw;
    }
}
@media only screen and (max-width: 770px) {
    .titles h1{
        font-size: 30px;
        max-width: 80%;
    }
    strong{
        font-size: 60px;
    }
}
@media only screen and (max-width: 660px) {
    .titles h1{
        font-size: 25px;
        max-width: 80%;
    }
    .titles h2{
        font-size: 16px;
    }
    strong{
        font-size: 60px;
    }
}
@media only screen and (max-width: 580px) {
    .titles h1{
        font-size: 20px;
        max-width: 80%;
    }

    .titles h2{
        font-size: 14px;
    }
}
@media only screen and (max-width: 470px) {
    .titles h1{
        font-size: 18px;
        max-width: 90%;
    }
    strong{
        font-size: 45px;
    }
}
@media only screen and (max-width: 380px) {
    .titles h1{
        font-size: 16px;
    }
    .titles h2{
        font-size: 12px;
    }
    strong{
        font-size: 35px;
    }
}
@media only screen and (max-width: 375px) {
    .titles h1{
        font-size: 14px;
    }

}
@media only screen and (max-width: 360px) {
    .titles{
        justify-content: space-between;
    }

}
@media only screen and (max-width: 355px) {
    .titles h1{
        max-width: 95%;
    }

}
@media only screen and (max-width: 327px) {
    .titles h1{
        font-size: 13px;
    }
    .titles h2{
        font-size: 12px;
    }
}

</style>

  