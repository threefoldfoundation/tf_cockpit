import { Line, mixins } from 'vue-chartjs'
import colors from 'vuetify/lib/util/colors'
const { reactiveProp } = mixins
export default {
  extends: Line,
  mixins: [reactiveProp],
  data () {
    return {
      gradient: null
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 400)

    this.gradient.addColorStop(0, colors.blueGrey.darken2)
    this.gradient.addColorStop(1, 'rgba(255,255,255,0.25)')
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, {
      elements: {
        line: {
          backgroundColor: this.gradient,
          borderColor: colors.blueGrey.darken2,
          fill: true,
          borderWidth: 5,
          tension: 0
        },
        point: {
          borderWidth: 0
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            color: colors.blueGrey.lighten5
          }
        }],
        xAxes: [{
          gridLines: {
            gridLines: {
              color: colors.blueGrey.lighten5
            }
          }
        }]
      },
      legend: {
        display: false
      },
      maintainAspectRatio: false,
      aspectRatio: 4
    })
  },
  computed: {

  },
  methods: {

  }
}
