Vue.component('message-input', {
  data: function() {
    return {
      content: ''
    }
  },
  template: '#message-input-template',
  methods: {
    submitMessage: function() {
      this.$parent.$parent.$emit('submitMessage', this.content);
      this.content = ''
    }
  }
});
