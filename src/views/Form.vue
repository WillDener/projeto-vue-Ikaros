<template>
  <div class="form">
    <Form />
    <br/>
    <div>
      <b-button variant="outline-danger" @click="sair">Sair</b-button> 
    </div>     
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import Form from "@/components/Form.vue";
export default {
  name: "form",
  components: {
    Form
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