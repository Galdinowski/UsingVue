<template>
  <div class="home">
    <h1>Dados do JSON local</h1>
    <ul class="" v-if="data.length">
      <li v-for="item in data" :key="item.datetime">{{ item.value }}</li>
    </ul>
  </div>
</template>

<script>
import { useApiStore } from '/home/galdino/DesafioTecnico/VueParaEstagio/UsingVue/usandovue./src/stores/MyStore.js';
 import data from '/home/galdino/DesafioTecnico/VueParaEstagio/UsingVue/usandovue./db/db.json'
 


export default {
  data()
  {
    return{
      data
    }
  },
  setup() {
    const apiStore = useApiStore();

    const loadData = () => {
      apiStore.fetchData();
    };

    return {
      ...apiStore,
      loadData,
    };
  },
};



</script>
