<template>
  <div>
    <b-container>
      <b-card border-variant="dark">        
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
      <div>{{ this.y.length }}</div>
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
        .collection('another').doc(this.w)
        .set({
          nome: this.n,
          idade: this.m,
          ra: this.w,
          curso: this.c,
          periodo: this.r,
          semestre: this.t,
                     
        });// falta fazer um for para passar materia dentro do array do bd, a dificuldade ta em justamente fazer um parelelo de uma função de inserção com o for           
            
      //Fazer uma tela de mensagem e configurar 
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