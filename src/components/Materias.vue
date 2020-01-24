<template>
    <div>
        <b-container>
            <b-table id="my-table" :items="materiais" :fields="campos" :per-page="pagina" :current-page="atual" striped bordered small fixed head-variant="dark" >
            <template v-slot:cell(status)="row">
            <b-form-group label-align="center">
                <b-form-checkbox v-model="row.item.status"/>
            </b-form-group> 
            </template>
            <template v-slot:cell(nota)="row">
            <b-form-group>
                <b-form-input type="number" v-model="row.item.nota" :disabled="row.item.status" :max="10" :min="0"  />
            </b-form-group> 
            </template>
            </b-table>
            <b-pagination v-model="atual" :total-rows="linhas" :per-page="pagina" aria-controls="my-table" align="center"></b-pagination>
        </b-container>
        <!--div>{{materiais}}</div-->
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            pagina: 7,
            atual: 1  
        }
    },
    computed: {
        ...mapState({
            materiais: state => state.materias,
            campos: state => state.fields,
        }),
        linhas(){
            console.log(this.materiais.length)
            return this.materiais.length            
        }
    }    
}
</script>