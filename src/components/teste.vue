<template>
    <div>
        <b-container>
            <b-col sm="1"><label for='nome' class="font">Nome:</label></b-col>
            <b-col sm="11" ><b-form-input size="sm" type="text" v-model="nome" placeholder="Nome Completo" id='nome'/></b-col>
            <br/>
            <div>{{nome}}</div>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pagina: 7,
            atual: 1,  
        }
    },
    computed: {
        nome: {
            get(){
                return this.$store.state.nome
            },
            set(value) {
                this.$store.commit('setNome',value)
            }
        }
    }   
}
</script>