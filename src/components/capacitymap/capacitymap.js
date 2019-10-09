import capacityselector from '../capacityselector'
import nodeinfo from '../nodeinfo'
import { mapGetters, mapMutations } from 'vuex'
import { groupBy, map } from 'lodash'

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
    },
    nodeLocation: function () {
      // Group nodes by country
      const groupedNodeLocations = groupBy(this.nodeslist, node => node.location.country)

      const nodeLocations = []
      // Map expect type [[country, count], ...]
      map(groupedNodeLocations, (groupedLocation, key) => {
        const numberOfNodesInLocation = []
        const count = groupedLocation.length
        numberOfNodesInLocation.push(key, count)
        nodeLocations.push(numberOfNodesInLocation)
      })

      return nodeLocations
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
