import { mapGetters, mapActions } from "vuex"
import { timingSafeEqual } from "crypto"

export default {
  name: 'farmManagement',
  components: {},
  props: [],
  data () {
    return {
      addFarmDialog: false,
      addNodeDialog: false,
      settingsDialog: false,
      companyRegistrationNumber: 'BE 0684 939 2659',
      farmDescription: 'This farm is located in the 3fold office in Lochristi',
      farmDescriptionRules: [v => v.length <= 250 || 'Max 250 characters'],
      searchFarms: '',
      searchNodes: '',
      farmSelected: {},
      farmToEdit: {},
      treebotId: 'LochristiFarm12',
      treebotName: 'Lochristi Farm',
      VAT: 'BE 0684 939 2659',
      showResult: false,
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
        { text: 'Location', value: 'location.city' },
        { text: 'Wallet addresses', value: 'wallet_addresses' },
        { text: 'Actions', value: 'action', sortable: false }
      ],
      nodeHeaders: [
        {
          text: 'Node ID',
          align: 'left',
          sortable: false,
          value: 'node_id'
        },
        { text: 'OS version', value: 'os_version' },
        { text: 'Uptime', value: 'uptime' },
        { text: 'ID', value: 'carbs' },
        { text: 'Address', value: 'address' },
        { text: 'Status', value: 'status', align: 'center' }
      ],
      newFarm: {
        // TODO  make this dynamic
        threebot_id: 'hello',
        location: {
          // city: 'Brugge',
          // country: 'Belgium',
          // continent: 'Europe',
          latitude: 0,
          longitude: 0
        },
        resource_prices: [{
          currency: 'USD',
          cru: 0,
          mru: 0,
          hru: 0,
          sru: 0,
          nru: 0
        }]
      },
      searchAddressInput: ''
    }
  },
  computed: {
    ...mapGetters([
      'farms',
      'nodes'
    ]),
    parsedLocation () {
      return {
        lat: this.newFarm.location.latitude,
        lng: this.newFarm.location.longitude
      }
    }
  },
  mounted () {
    this.getFarms()
  },
  methods: {
    ...mapActions([
      'registerFarm',
      'getFarms',
      'updateFarm',
      'getNodes'
    ]),
    viewNodes (item) {
      this.farmSelected = item
      this.getNodes(this.farmSelected.id)
    },
    viewSettings (farm) {
      this.farmToEdit = farm
      this.settingsDialog = true
    },
    getColor (status) {
      if (status === 'Active') return 'green'
      else return 'red'
    },
    addFarm () {
      this.addFarmDialog = false
      this.registerFarm(this.newFarm)
    },
    setPlace (event) {
      this.newFarm.location.latitude = event.latLng.lat()
      this.newFarm.location.longitude = event.latLng.lng()
      console.log(this.newFarm)
    },
    saveFarm () {
      this.updateFarm(this.farmToEdit)
      this.settingsDialog = false
    },
    cancelEditFarm () {
      this.settingsDialog = false
    }
  }
}
