export default {
  name: 'blockinfo',
  components: {},
  props: [
    'block',
    'height'
  ],
  computed: {
    // Parse nodelist to table format here
    timestamp: function () {
      return new Date(this.block.rawblock.timestamp * 1000)
    }
  }
}
