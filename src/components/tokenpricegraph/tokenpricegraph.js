import lineGraph from '../linegraph'
export default {
  name: 'tokenpricegraph',
  components: { lineGraph },
  props: [],
  data () {
    return {
      dataCollection: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          data: [2, 1, 3, 5, 9, 12]
        }]
      }
    }
  }
}
