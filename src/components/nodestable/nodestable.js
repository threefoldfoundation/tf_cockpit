import nodeInfo from '../nodeinfo'
import { mapGetters } from 'vuex'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

momentDurationFormatSetup(moment)

export default {
  name: 'nodestable',
  components: { nodeInfo },
  data () {
    return {
      showResult: false,
      itemsPerPage: 4,
      expanded: [],
      searchNodes: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Uptime', value: 'uptime' },
        { text: 'Version', value: 'version' },
        { text: 'Farmer', value: 'farmer' },
        { text: 'Status', value: 'status', align: 'center' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'nodeslist'
    ]),
    // Parse nodelist to table format here
    parsedNodesList: function () {
      const parsedNodes = this.nodeslist.map((node) => {
        const uptime = moment.duration(node.uptime, 'seconds').format()

        return {
          uptime,
          version: node.os_version,
          id: node.node_id,
          farmer: node.farm_id,
          farmerId: node.farm_id,
          name: 'node ' + node.node_id,
          totalResources: node.total_resources,
          updated: new Date(node.updated * 1000),
          status: this.getStatus(node)
        }
      })
      return parsedNodes
    }
  },
  methods: {
    getStatus (node) {
      const { updated } = node
      // if updated in 0 means node is down
      if (updated === 0) return { color: 'red', status: 'down' }

      const startTime = moment()
      const end = moment(updated)
      const minutes = startTime.diff(end, 'minutes')

      // if updated difference in minutes with now is less then 10 minutes, node is up
      if (minutes <= 10) return { color: 'green', status: 'up' }
      else return { color: 'orange', status: 'likely down' }
    },
    truncateString (str) {
      if (str.length < 10) return str
      return str.substr(0, 10) + '...'
    }
  }
}
