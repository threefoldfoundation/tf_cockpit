import { mapActions } from 'vuex'
import scrollablecard from '../scrollablecard'
export default {
  name: 'lasttrades',
  components: { scrollablecard },
  props: [],
  data () {
    return {
      showDialog: false
    }
  },
  computed: {
  },
  mounted () {
    // this.getTrades()
  },
  methods: {
    openDialog () {
      // TODO: Get more data
      this.$root.$emit('dialog', {
        title: 'Block #355674',
        body: 'ID:a9285c456f4086e4fc7e73096fb660a8e0b22ab4f2617ab624dea030a82e4832'
      })
    }
  }
}
