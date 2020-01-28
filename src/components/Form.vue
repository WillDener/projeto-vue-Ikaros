<template>
  <div>
    <b-container>
      <b-card border-variant="dark" bg-variant="light">        
        <div>
          <ul>
            <li v-for="form in formulario" :key="form">
              {{ form }}</li>
          </ul>
        </div>

        <div>
          <Profile/>
        </div>
        <br/>
        <div>
          <Materias />
        </div>
        <div>
          <b-button variant="outline-primary" @click="saveForm">Enviar</b-button>                   
        </div>
      </b-card>      
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase";
import Materias from "./Materias";
import Profile from "./Profile";
import {mapState} from 'vuex';
export default {
  components: {
    Materias,
    Profile,
  },
  data() {
    return {
      formulario: [],
      Materias,
      Profile,
      form: {
        nome: "",
        sobrenome: ""
      }
    };
  },
  methods: {
    saveForm() {
      firebase        
        .firestore()
        .collection('formulario').doc(this.w)
        .set({
          nome: this.n,
          idade: this.m,
          ra: this.w,
          curso: this.c,
          periodo: this.r,
          semestre: this.t,                     
        });
      this.saveMateria()
    },
    saveMateria(){
      for (var i = 0; i < this.y.length; i++){
        firebase
          .firestore()    
          .collection('formulario').doc(this.w)
          .update({
            materias: firebase.firestore.FieldValue.arrayUnion({nome: this.y[i].nome, status: this.y[i].status, nota: this.y[i].nota})            
          });
      }     
    }
  },
  computed: {
    ...mapState({
        m: state => state.idade,
        n: state => state.nome,
        c: state => state.curso,
        r: state => state.periodo,
        t: state => state.semestre,
        w: state => state.ra,
        y: state => state.materias
    })
  },
  created() {
    firebase
      .firestore()
      .collection("formulario")
      .get()
      .then(querysnapShot => {
        querysnapShot.forEach(doc => {
          this.forms.push(doc.data());
          console.log(doc.id, " => ", doc.data());
        });
      });

    var aux = firebase
      .firestore()
      .collection('any')
      .doc('materias');
    
    aux.set({
      
    })

  }
};
</script>