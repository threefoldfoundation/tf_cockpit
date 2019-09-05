import capacityselector from '../capacityselector'
import nodeinfo from '../nodeinfo'
export default {
  name: 'capacitymap',
  components: { capacityselector, nodeinfo },
  props: [],
  data () {
    return {
      farmers: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
  }
}
