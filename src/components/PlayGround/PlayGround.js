export default {
  name: 'PlayGround',
  data() {
    return {
      backgroundClassName: 'red-background',
      counter: 0,
      message: 'static message',
      anchorTag: '<a href="https://www.google.ca" target="_blank">Heyuhhh</a>',
      nameInput: 'No Name'
    }
  },

  computed: {
    reversedMessage() {
      return this.message.toLowerCase().split('').reverse().join('')
    }
  },

  watch: {
    nameInput(newValue, oldValue) {
      /* eslint-disable no-console */
      console.log('old value: ', oldValue)
      console.log('new value: ', newValue)
    }
  },

  methods: {
    handleClick(event) {
      this.counter++
      this.message = `you are clicked this ${this.counter} times!`
      this.backgroundClassName = this.counter % 2 ? 'green-background' : 'red-background'
      this.message = this.nameInput
    }
  }
}