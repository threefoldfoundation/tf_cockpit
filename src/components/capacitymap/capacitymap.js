import capacityselector from '../capacityselector'
import nodeinfo from '../nodeinfo'
import { mapGetters } from 'vuex'
export default {
  name: 'capacitymap',
  components: { capacityselector, nodeinfo },
  props: [],
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'farmslist'
    ])
  },
  mounted () {
  },
  methods: {
  }
}
