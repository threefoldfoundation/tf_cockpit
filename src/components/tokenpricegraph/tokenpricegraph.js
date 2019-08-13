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
          data: [12, 19, 3, 5, 2, 3]
        }]
      }
    }
  }
}
