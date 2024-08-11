<template>
  <div class="ibge">
    <h1>Pegando a api do IBGE</h1>
      <button @click="fetchData">Buscar Dados</button>
    <div v-if="loading">Carregando...</div>
    <div v-else-if="error">{{ error }}</div>
    <div class="tabela" v-else>
  <table id="dentrodaTabela">
    <thead>
      <tr>
        <th> <h3>Descrição do Tipo de Estação</h3></th> </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.siglaTipoEstacao">
        <td>{{ item.descricaoTipoEstacao }}</td>
      </tr>
    </tbody>
  </table>
</div>
  </div>
</template>

<script>
import axios from 'axios';


export default {

  data() {

    return {
      data:  
 null
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
  }
</style>