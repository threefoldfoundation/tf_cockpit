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
    registerdfarms() { return this.$store.getters.registerdfarms },
    registerd3bots() { console.log(this.$store); return this.$store.getters.registerd3bots },
      /*
    ...mapGetters([
      'registerd3bots',
      'registerdfarms'
    ])*/
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
