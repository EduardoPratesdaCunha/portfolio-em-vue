<script>
export default {
  name: 'Copy',
  props: {
    handleCopy: {
      type: Function,
      required: true
    }
  }
};
</script>

<template>
    <div class="icon--copy" @click="handleCopy">
        <img 
            src="../../../assets/images/icons/copy.svg" 
            alt="Ícone de copiar, para copiar meu e-mail"
        >     
    </div>
</template>
<style>
.icon--copy img{
    width: 50px;
    border-left: 1px solid black;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
}
.icon--copy:hover{
    cursor: pointer;
}
@media only screen and (max-width:462px){
    .icon--copy img{
        width: 30px;
        padding: 5px;
    }
}

</style>
