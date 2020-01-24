import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    materias: [
      {
        nome: "Fundamentos de Administração Geral",
        status: false,
        nota: Number
      },
      {
        nome: "Arquitetura e Organização de Computadores",
        status: false,
        nota: Number
      },
      { nome: "Algoritmos", status: false, nota: Number },
      {
        nome: "Laboratório de Desenvolvimento em Banco de Dados I",
        status: false,
        nota: Number
      },
      { nome: "Comunicação e Expressão", status: false, nota: Number },
      { nome: "Matemática Discreta", status: false, nota: Number },
      {
        nome: "Atividades Acadêmico-científico-culturais",
        status: false,
        nota: Number
      },
      //2
      { nome: "Planejamento Estratégico", status: false, nota: Number },
      {
        nome: "Fundamentos de Gestão de Pessoas",
        status: false,
        nota: Number
      },
      {
        nome: "Laboratório de Desenvolvimento em Banco de Dados II",
        status: false,
        nota: Number
      },
      { nome: "Engenharia de Software", status: false, nota: Number },
      { nome: "Linguagem de Programação I", status: false, nota: Number },
      {
        nome: "Arquitetura e Modelagem de Banco de Dados",
        status: false,
        nota: Number
      },
      { nome: "Inglês II", status: false, nota: Number },
      { nome: "Fundamentos de Cálculo", status: false, nota: Number },
      //3
      {
        nome: "Laboratório de Desenvolvimento em Banco de Dados III",
        status: false,
        nota: Number
      },
      { nome: "Estruturas de Dados", status: false, nota: Number },
      {
        nome: "Fundamentos de Gestão de Tecnologia da Informação",
        status: false,
        nota: Number
      },
      { nome: "Linguagem de Programação II", status: false, nota: Number },
      { nome: "Programação de Banco de Dados", status: false, nota: Number },
      {
        nome: "Fundamentos de Redes de Computadores",
        status: false,
        nota: Number
      },
      { nome: "Inglês III", status: false, nota: Number },
      { nome: "Estatística Descritiva", status: false, nota: Number },
      //4
      {
        nome: "Administração de Banco de Dados",
        status: false,
        nota: Number
      },
      {
        nome: "Laboratório de Desenvolvimento em Banco de Dados IV",
        status: false,
        nota: Number
      },
      {
        nome: "Programação Avançada de Banco de Dados",
        status: false,
        nota: Number
      },
      {
        nome: "Padrões de Projetos de Sistemas",
        status: false,
        nota: Number
      },
      {
        nome: "Sistemas Operacionais Centralizados e Distribuídos",
        status: false,
        nota: Number
      },
      { nome: "Inglês IV", status: false, nota: Number },
      {
        nome: "Metodologia da Pesquisa Científico-Tecnológica",
        status: false,
        nota: Number
      },
      //5
      {
        nome: "Fundamentos de Gestão de Projetos",
        status: false,
        nota: Number
      },
      {
        nome: "Laboratório de Desenvolvimento em Banco de Dados V",
        status: false,
        nota: Number
      },
      {
        nome: "Laboratório de Projeto de Banco de Dados",
        status: false,
        nota: Number
      },
      { nome: "Inglês V", status: false, nota: Number },
      { nome: "Tecnologia e Ambiente", status: false, nota: Number },
      { nome: "Projeto de Data Warehouse", status: false, nota: Number },
      {
        nome: "Projeto de Banco de Dados Distribuídos",
        status: false,
        nota: Number
      },
      {
        nome: "Projeto Trabalho de Graduação em Banco de Dados I",
        status: false,
        nota: Number
      },
      //6
      {
        nome: "Gestão de Processos de Desenvolvimento de Software",
        status: false,
        nota: Number
      },
      {
        nome: "Legislação Aplicada à Tecnologia da Informação",
        status: false,
        nota: Number
      },
      {
        nome: "Laboratório de Desenvolvimento em Banco de Dados VI",
        status: false,
        nota: Number
      },
      {
        nome: "Otimização e Balanceamento de Banco de Dados",
        status: false,
        nota: Number
      },
      { nome: "Inglês VI", status: false, nota: Number },
      {
        nome: "Tópicos Avançados em Banco de Dados",
        status: false,
        nota: Number
      },
      {
        nome: "Projeto de Banco de Dados Não Estruturados",
        status: false,
        nota: Number
      }
    ],
    fields:[
      {
        key: 'nome',
        label: 'Matéria'
      },
      {
        key: 'status',
        label: 'Ignorar'
      },
      {
        key: 'nota',
        label: 'Média'
      }//150.163.12.204/8080
    ],
    nome: "",
    idade: null,
    ra: "",
    curso: null,
    semestre: null,
    periodo: null,
  },
  mutations: {
    setNome (state, valor) {
      state.nome = valor
    },
    setIdade (state, valor) {
      state.idade = valor
    }, 
    setRA (state, valor) {
      state.ra = valor
    }, 
    setCurso (state, valor) {
      state.curso = valor
    },   
    setSemestre (state, valor) {
      state.semestre = valor
    }, 
    setPeriodo (state, valor) {
      state.periodo = valor
    }
  },
  actions: {
  },
  modules: {
  }
})
