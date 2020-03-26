import ApexCharts from 'apexcharts'

export default {
  name: 'resource_chart',
  components: {
    apexchart: ApexCharts
  },
  data () {
    return {
      series: [
        {
          name: 'Total',
          data: [64, 32, 5000, 1200]
        },
        {
          name: 'Reserved',
          data: [5, 4, 10, 0]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radar'
        },
        title: {
          text: 'Resource units'
        },
        xaxis: {
          categories: ['CRU', 'MRU', 'HRU', 'SRU']
        }
      }
    }
  }
}
