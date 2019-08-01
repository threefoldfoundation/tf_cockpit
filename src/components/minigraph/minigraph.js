export default {
  name: 'minigraph',
  components: {},
  props: {
    color: {
      type: String,
      default: 'green'
    },
    title: {
      type: String,
      default: 'Sold last 7 days'
    },
    append: {
      type: String,
      default: ''
    },
    special: {
      type: Boolean
    }
  },
  mounted () {
    this.data = this.getRandomData()
  },
  data () {
    return {
      data: []
    }
  },
  methods: {
    getRandomData: () => {
      var data = []
      for (let index = 0; index < 7; index++) {
        var newValue = Math.floor(Math.random() * 1000)
        if (index) {
          newValue += data[index - 1]
        }
        data.push(newValue)
      }
      return data
    }
  },
  computed: {

  }
}
