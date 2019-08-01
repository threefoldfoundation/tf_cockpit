import capacityselector from '../capacityselector'
export default {
  name: 'capacitymap',
  components: { capacityselector },
  props: [],
  data () {
    return {
      farmers: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      showResult: false,
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
        { text: 'Description', value: 'iron' }
      ],
      items: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        }
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
