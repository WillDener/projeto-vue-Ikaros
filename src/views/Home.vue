<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <b-button variant="outline-danger" @click="sair">Sair</b-button>    
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld
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