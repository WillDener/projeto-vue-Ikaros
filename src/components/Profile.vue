<template>
    <div>        
        <b-container>            
            
            <b-row class="my-1">                
                <b-col sm="12" ><b-form-input size="sm" type="text" v-model="nome" placeholder="Nome Completo" id='nome'/></b-col>
            </b-row>
            <b-row class="my-1 justify-content-md-center">              
                <b-col sm="2"><b-form-input size="sm" type="number" v-model="idade" placeholder="Idade" id='idade'/></b-col>            
                <b-col sm="6" md="auto"><b-form-input size="sm" type="text" v-model="ra" placeholder="RA do aluno"/></b-col>
            </b-row>   
                             
            <b-row class="my-1">
                <b-col sm="12">
                    <b-form-select v-model="curso" :options="cursos" size="sm">
                    </b-form-select>                 
                </b-col>
            </b-row>
            
            <b-row class="my-1">
                <b-col sm="6">
                    <b-form-select v-model="semestre" :options="semestres" size="sm">
                    </b-form-select>
                </b-col>            
                <b-col sm="6">
                    <b-form-select v-model="periodo" :options="periodos" size="sm">
                    </b-form-select>   
                </b-col>               
            </b-row>

        </b-container>                
    </div>
</template>

<script>
export default {
    name:"Profile",
    data() {
        return {            
            cursos: [{value:null,text:'Seu curso'},"Banco de Dados", "Análise e Desenvolvimento de Sistema","Logistica",'Manufatura Avançada'],
            semestres: [{value:null,text:'Seu semestre'},1,2,3,4,5,6],
            periodos: [{value:null,text:'Seu período'},'diurno', 'matituno', 'noturno'],            
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
        },
        idade: {
            get(){
                return this.$store.state.idade
            },
            set(value) {
                this.$store.commit('setIdade',value)
            }
        },
        ra: {
            get(){
                return this.$store.state.ra
            },
            set(value) {
                this.$store.commit('setRA',value)
            }
        },
        curso: {
            get(){
                return this.$store.state.curso
            },
            set(value) {
                this.$store.commit('setCurso',value)
            }
        },
        semestre: {
            get(){
                return this.$store.state.semestre
            },
            set(value) {
                this.$store.commit('setSemestre',value)
            }
        },
        periodo: {
            get(){
                return this.$store.state.periodo
            },
            set(value) {
                this.$store.commit('setPeriodo',value)
            }
        },

    },
}
</script>

<!--style>
label.font {
    color: white;
    font-size: 17px;
    margin-top: 5px;
}
</style-->