<template>

    <div class="chart-container">
        <Bar :data="chartData"  />
        
    </div>


  </template>
  
  <script>
  import { ref, watchEffect } from 'vue';
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import axios from 'axios';


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  
  export default {
  components: { Bar },
  props: ["dataFromApp"],
  data() {
    return {
      chartData: { 
	name: "BarChart",
        labels: this.dataFromApp.map(el=>el.country),
        datasets: [
          {
            label: 'Covid Cases by Country',
            backgroundColor: '#f87979',
            data: this.dataFromApp.map(el=>el.confirmed)
          }
        ]
      }
    }
}
}
  </script>
  
  <style scoped>
.chart-container {
  width: 80vw;
  max-width: 1000px;
}
</style>