export default {
  name: 'farmmanagement',
  components: {},
  props: [],
  data () {
    return {
      addFarmDialog: false,
      companyRegistrationNumber: 'BE 0684 939 2659',
      computeUnit: '5.66',
      settingsDialog: false,
      farmDescription: 'This farm is located in the 3fold office in Lochristi',
      farmDescriptionRules: [v => v.length <= 250 || 'Max 250 characters'],
      farmLocation: 'Lochristi, Belgium',
      farmEmail: 'lcohristifarm@threefold.com',
      hddUnit: '2.6',
      memoryUnit: '3.2',
      searchFarms: '',
      searchNodes: '',
      farmSelected: {},
      farmToEdit: {},
      ssdUnit: '4.6',
      treebotId: 'LochristiFarm12',
      treebotName: 'Lochristi Farm',
      VAT: 'BE 0684 939 2659',
      showResult: false,
      showBadge: true,
      itemsPerPage: 4,
      expanded: [],
      walletAddress: 'eioeZMImsnvqimZMIJDmnv93Dmvciqmoef',
      headers: [
        {
          text: 'Farm name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Farm id', value: 'farmId' },
        { text: 'Farm description', value: 'desc' },
        { text: 'Actions', value: 'action', sortable: false }
      ],
      farms: [
        {
          name: 'Farm Lochristi',
          farmId: 'LochristiFarm01',
          desc: 'farm is located in 3fold office Lochristi'
        },
        {
          name: 'Farm Bruges',
          farmId: 'BrugesFarm01',
          desc: 'Farm is located in Jimber office Bruges'
        },
        {
          name: 'Farm Lochristi2',
          farmId: 'LochristiFarm02',
          desc: 'farm is located in 3fold office Lochristi'
        }
      ],
      nodeHeaders: [
        {
          text: 'Node',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Uptime', value: 'calories' },
        { text: 'Version', value: 'fat' },
        { text: 'ID', value: 'carbs' },
        { text: 'Farmer', value: 'farmer' },
        { text: 'Status', value: 'status', align: 'center' }
      ],
      nodeItems: [
        {
          name: 'Node 1',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          farmer: 'kdespiegeleer',
          sodium: 87,
          calcium: '14%',
          status: 'Active'
        },
        {
          name: 'Node 2',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          farmer: 'kdespiegeleer',
          sodium: 129,
          calcium: '8%',
          status: 'Active'
        },
        {
          name: 'Node 3',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          farmer: 'medeweerdt',
          sodium: 337,
          calcium: '6%',
          status: 'Not active'
        }
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    viewNodes (item) {
      this.farmSelected = item
    },
    viewSettings (item) {
      this.farmToEdit = item
      this.settingsDialog = true
    },
    getColor (status) {
      if (status === 'Active') return 'green'
      else return 'red'
    }
  }
}
