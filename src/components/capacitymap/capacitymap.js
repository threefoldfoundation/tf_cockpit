import capacityselector from '../capacityselector'
import nodeinfo from '../nodeinfo'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'capacitymap',
  components: { capacityselector, nodeinfo },
  props: [],
  data () {
    return {
      select: { text: 'All', value: 'All' }
    }
  },
  computed: {
    ...mapGetters([
      'farmslist',
      'nodeslist',
      'originalNodesList'
    ]),
    allFarmsList: function () {
      const allFarmers = this.farmslist
      allFarmers.push({ text: 'All', value: 'All' })
      return allFarmers
    }
  },
  mounted () {
  },
  methods: {
    setSelected (value) {
      if (value === 'All') return this.setNodesList(this.originalNodesList)
      const filteredNodes = this.originalNodesList.filter(node => node.farm_id.toString() === value.id.toString())
      this.setNodesList(filteredNodes)
    },
    ...mapMutations({
      setNodesList: 'setNodesList'
    })
  }
}
