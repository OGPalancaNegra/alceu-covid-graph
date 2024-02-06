
<template>
  <div >
  <h1 class="font-bold text-lg">Casos de Covid por Pais</h1>
  <CovidChart :dataFromApp="covidData" />
  </div>
  
</template> 



<script>

import { ref, onMounted } from 'vue';
import axios from 'axios';
import CovidChart from './components/CovidChart.vue';

 
export default {
components: {
  CovidChart,
},
setup() {
  const covidData = ref([]);


  onMounted(() => {
    fetchCovidData(); 
  });


  async function fetchCovidData() {
    try {
      const response = await axios.get(`http://localhost:3000/api/covid`);
      console.log(response.data)

      covidData.value = response.data


    } catch (error) {
      console.error(error);
    }
  }
  return { covidData };
},
};

</script>




<style scoped>
.chart-container {
  width: 80vw;
  max-width: 600px;
}
</style>
