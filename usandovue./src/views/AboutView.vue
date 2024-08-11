<template>
  <div class="ibge">
    <h1>Pegando a api do IBGE</h1>
      <button @click="fetchData">Buscar Dados</button>
    <div v-if="loading">Carregando...</div>
    <div v-else-if="error">{{ error }}</div>
    <div class="tabela" v-else>
      <ul>
        <li v-for="item in data" :key="item.siglaTipoEstacao">{{ item.descricaoTipoEstacao }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {

  data() {

    return {
      data:  
 null,
      loading: false,
      error: null
    }
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/bdg/tipo');
        this.data = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style >
  .tabela{
    background-color:bisque;
    color: black;
    margin: 0 auto;
  }
  
</style>