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
        {
          text: 'Node',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Uptime', value: 'uptime' },
        { text: 'Version', value: 'version' },
        { text: 'ID', value: 'id' },
        { text: 'Farmer', value: 'farmer' },
        { text: 'Status', value: 'status', align: 'center' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'nodeslist'
    ])
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
