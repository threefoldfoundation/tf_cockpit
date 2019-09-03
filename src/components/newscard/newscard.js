import scrollablecard from '../scrollablecard'
export default {
  name: 'newscard',
  components: { scrollablecard },
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    showDialog () {
      this.$root.$emit('dialog', {
        title: 'News from ThreeFold Grid',
        image: 'https://www.skillsforgrowth.org.uk/images/headerimg/young-person.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit. Fusce id velit ut tortor pretium viverra. Viverra vitae congue eu consequat. Sit amet est placerat in egestas erat imperdiet sed euismod. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Lacus viverra vitae congue eu consequat. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Vestibulum sed arcu non odio euismod lacinia. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Et netus et malesuada fames ac turpis egestas. Vulputate enim nulla aliquet porttitor lacus. Facilisi morbi tempus iaculis urna. Dolor sit amet consectetur adipiscing elit pellentesque. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Nunc faucibus a pellentesque sit amet. Egestas integer eget aliquet nibh praesent.'
      })
    }
  }
}
