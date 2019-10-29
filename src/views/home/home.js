import miniGraph from '../../components/minigraph'
import capacityMap from '../../components/capacitymap'
import nodesTable from '../../components/nodestable'
import tokenPriceGraph from '../../components/tokenpricegraph'
import lastTrades from '../../components/lasttrades'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: { miniGraph, capacityMap, tokenPriceGraph, lastTrades, nodesTable },
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    this.getRegistered3Bots()
    this.getRegisteredFarms()
  },
  methods: {
    ...mapActions([
      'getRegistered3Bots',
      'getRegisteredFarms'
    ])
  }
}
