import scrollablecard from '../scrollablecard'
import tfService from '../../services/tfService'

export default {
  name: 'newscard',
  components: { scrollablecard },
  props: [],
  data () {
    return {
      newsItems: [],
      showDialog: false,
      news: {}
    }
  },
  computed: {
    headerStyle () {
      if (this.news.image) {
        return `background: url(${this.news.image}); background-attachment: fixed; background-position: center; background-size: cover; background-repeat: no-repeat;`
      }
    }
  },
  mounted () {
    tfService.news().then(res => {
      this.newsItems = res.data.news
    })
  },
  methods: {
    showNewsDialog (newsItem, showDialog) {
      this.news = newsItem
      this.showDialog = showDialog
    }
  }
}
