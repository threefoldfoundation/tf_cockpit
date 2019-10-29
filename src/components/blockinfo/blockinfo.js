export default {
  name: 'blockinfo',
  components: {},
  props: [
    'block',
    'height'
  ],
  computed: {
    timestamp: function () {
      return new Date(this.block.rawblock.timestamp * 1000)
    }
  }
}
