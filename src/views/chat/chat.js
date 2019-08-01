import message from '../../components/message'
export default {
  name: 'chat',
  components: { message },
  props: [],
  data () {
    return {
      message: '',
      items: [{
        icon: 'fa-phone',
        name: '+32 496 922 465'
      }, {
        icon: 'fa-envelope',
        name: 'ivan.coene@jimber.org'
      }]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
