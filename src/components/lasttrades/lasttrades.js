// import { mapActions } from 'vuex'
import blockInfo from '../blockinfo'
import scrollablecard from '../scrollablecard'
import tfService from '../../services/tfService'

export default {
  name: 'lasttrades',
  components: { scrollablecard, blockInfo },
  props: [],
  data () {
    return {
      showDialog: false,
      blocks: [],
      block: {},
      height: 0
    }
  },
  computed: {
  },
  mounted () {
    tfService.getExplorerConstants().then(res => {
      const { height } = res.data
      this.height = height
      for (let i = 0; i < 50; i++) {
        tfService.getExplorerBlockByHeight(height - i).then(res => {
          this.blocks.push(res.data.block)
        })
      }
    })
  },
  methods: {
    showBlockDialog (block, showDialog) {
      this.block = block
      this.showDialog = showDialog
    }
  }
}
