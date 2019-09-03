export default {
  name: 'farmmanagement',
  components: {},
  props: [],
  data () {
    return {
      showResult: false,
      showBadge: true,
      itemsPerPage: 4,
      expanded: [],
      headers: [
        {
          text: 'Node',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Uptime', value: 'calories' },
        { text: 'Version', value: 'fat' },
        { text: 'ID', value: 'carbs' },
        { text: 'Farmer', value: 'protein' },
        { text: 'Status', value: 'status' }
      ],
      items: [
        {
          name: 'Node 1',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          status: 'Active'
        },
        {
          name: 'Node 2',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          status: 'Active'
        },
        {
          name: 'Node 3',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          status: 'Active'
        }
      ]
    }
  },
  computed: {

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
