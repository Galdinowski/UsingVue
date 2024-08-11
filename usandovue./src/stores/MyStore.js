import { defineStore } from 'pinia';
import axios from 'axios';



export const useApiStore = defineStore('MyStore', {
  state: () => ({
    data: [],       
    loading: false, 
    error: null,    
  }),
  actions: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/bdg/tipo');
        this.data = response.data;
      } catch (err) {
        this.error = 'Erro ao buscar dados: ' + err.message;
      } finally {
        this.loading = false;
      }
    },
  },
});