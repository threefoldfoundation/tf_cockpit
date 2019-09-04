export default {
  name: 'farmsettings',
  components: {},
  props: [],
  data () {
    return {
      companyRegistrationNumber: 'BE 0684 939 2659',
      computeUnit: '5.66',
      farmDescription: 'This farm is located in the 3fold office in Lochristi',
      farmDescriptionRules: [v => v.length <= 250 || 'Max 250 characters'],
      farmLocation: 'Lochristi, Belgium',
      farmEmail: 'lcohristifarm@threefold.com',
      hddUnit: '2.6',
      memoryUnit: '3.2',
      search: '',
      selectedFarm: {},
      ssdUnit: '4.6',
      treebotId: 'LochristiFarm12',
      treebotName: 'Lochristi Farm',
      VAT: 'BE 0684 939 2659',
      showResult: false,
      showBadge: true,
      itemsPerPage: 4,
      expanded: [],
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
          name: 'Farm Lochristi',
          farmId: 'LochristiFarm02',
          desc: 'farm is located in 3fold office Lochristi'
        }
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    editItem (item) {
      this.selectedFarm = this.farms.indexOf(item)
    }
  }
}
