<template>
  <div class="teste">
    <Teste/>
    <b-button variant="outline-danger" @click="sair">Sair</b-button>  
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import Teste from "@/components/teste.vue";
export default {
  name: "teste",
  components: {
    Teste
  },
  methods: {
    sair: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>