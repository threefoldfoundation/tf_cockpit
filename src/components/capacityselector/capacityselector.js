import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'capacityselector',
  components: {},
  props: ['icon', 'label'],
  data () {
    let max = 0
    let range = []
    switch (this.label) {
      case 'CRU': {
        max = 64
        range = [8, 58]
        break
      }
      case 'HRU': {
        max = 5000
        range = [500, 4500]
        break
      }
      case 'MRU': {
        max = 512
        range = [50, 460]
        break
      }
      case 'SRU': {
        max = 5000
        range = [500, 4500]
        break
      }
    }
    return {
      min: 0,
      max,
      slider: 40,
      range
    }
  },
  computed: {
    ...mapGetters([
      'nodeslist',
      'originalNodesList'
    ])
  },
  methods: {
    handleInput (value) {
      const [min, max] = value
      let filteredNodes = this.originalNodesList
        .filter(node => node.total_resources[this.label.toLowerCase()] <= max && node.total_resources[this.label.toLowerCase()] >= min)

      this.setNodesList(filteredNodes)
    },
    ...mapMutations({
      setNodesList: 'setNodesList'
    })
  }
}
