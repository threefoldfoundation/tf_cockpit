import miniGraph from '../../components/minigraph'
import capacityMap from '../../components/capacitymap'
import nodesTable from '../../components/nodestable'
import scrollablecard from '../../components/scrollablecard'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'capacity',
  components: { miniGraph, capacityMap, scrollablecard, nodesTable },
  props: [],
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'registered3bots',
      'registeredfarms',
      'cores',
      'countries',
      'onlinenodes'
    ])
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
