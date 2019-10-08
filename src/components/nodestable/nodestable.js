import nodeInfo from '../nodeinfo'
import { mapGetters } from 'vuex'
export default {
  name: 'nodestable',
  components: { nodeInfo },
  props: [],
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
      return this.nodeslist.map((node, index) => {
        return {
          uptime: node.uptime,
          version: node.os_version.substr(0, 8) + '...',
          id: node.node_id.substr(0, 8) + '...',
          farmer: node.farm_id.substr(0, 8) + '...',
          status: 'Active',
          farmerId: node.farm_id,
          name: node + index
        }
      })
    }
  },
  mounted () {

  },
  methods: {
    getColor (status) {
      if (status === 'Active') return 'green'
      else return 'red'
    }
  }
}
