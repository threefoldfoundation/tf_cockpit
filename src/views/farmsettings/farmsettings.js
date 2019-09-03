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
      ssdUnit: '4.6',
      treebotId: 'LochristiFarm12',
      treebotName: 'Lochristi Farm',
      VAT: 'BE 0684 939 2659'
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
