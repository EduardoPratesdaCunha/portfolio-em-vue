<script>
import Sociais from '@/components/icons/sociais/index.vue'
import Mail from '@/components/icons/mail/index.vue'
import Copy from '@/components/icons/copy/index.vue'

export default {
    name: 'Footer',
    components: {
        Sociais,
        Mail,
        Copy,
    },
    data(){
        return{
            copied: false,
            emailRef: null,
        };
    },
    methods:{
        handleCopy(){
            const emailText = this.$refs.emailRef.innerText;
            navigator.clipboard.writeText(emailText)
            .then(()=>{
                this.copied = true;
                setTimeout(()=> (this.copied = false), 2000);
            })
            .catch((error) => {
                console.error('Erro ao copiar o texto:', error);
            });
        }
    }
};

</script>

<template>
    <footer class="footer">
        <div class="footer--title">
            <h4>Entre em contato</h4>
        </div>
        <div class="footer--contacts">
            <div class="footer--links">
                <div :class="` mail ${copied ? 'copied' : ''} `">
                    <Mail />
                    <span 
                        ref="emailRef" 
                        class="mail--text"
                    >
                        eduardopratesrs@gmail.com
                    </span>
                    <Copy :handleCopy="handleCopy" :emailRef="emailRef"/>
                </div>
                <Sociais />
            </div>
        </div>
        <div class="background"></div>
    </footer>
</template>
<style>
.footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    padding: 10em 0;
    background-image:linear-gradient(#ffffff,#ff8484,#8488b5);
}
.footer--title{
    margin-bottom: 2em;
    font-size: 24px;
}

.footer--contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
}


.footer--personal h3{
    text-transform: uppercase;
    margin-bottom: 2em;
}
.footer--links{
    display: flex;    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: justify;
}

.mail{
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 15px;
    padding: 10px;
}

.mail--text{
    letter-spacing: 0.1em;
    font-size: 18px;
}
.mail.copied {
    animation: blink 2s;
}

@keyframes blink {
0%, 50% {
    background-color: inherit;
}
25%, 75% {
    background-color: #49bb53; /* Cor verde */
}
}

@media only screen and (max-width: 1670px) {
    .footer{
        text-align: center;
    }
}
@media only screen and (max-width: 462px){
    .footer--links{
        width: 80%;
    }
    .mail--text{
        letter-spacing: 0.1em;
        font-size: 14px;
    }
    .sociais--footer{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
}

@media only screen and (max-width: 370px) {
    .mail{
        padding: 5px;
    }
    .mail--text{
        letter-spacing: 0.1em;
        font-size: 12px;
    }

}


</style>