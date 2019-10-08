// import { mapActions } from 'vuex'
import blockInfo from '../blockinfo'
import scrollablecard from '../scrollablecard'
export default {
  name: 'lasttrades',
  components: { scrollablecard, blockInfo },
  props: [],
  data () {
    return {
      showDialog: false,
      block: {
        height: '355738',
        id: 'a9285c456f4086e4fc7e73096fb660a8e0b22ab4f2617ab624dea030a82e4832',
        parentBlockId: 'e2cba571b7fb0a8b65bc0202968f0743318982ada3bbdaf53aa8547c3f255b7f',
        time: '10:53, Sep 03, 2019',
        blockConfirmations: '',
        blockStake: '19 BS'
      }
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {

  }
}
