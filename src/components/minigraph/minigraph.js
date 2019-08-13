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
    value: {
      default: '0'
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
  },
  data () {
    return {
      data: []
    }
  },
  methods: {
  },
  computed: {

  }
}
