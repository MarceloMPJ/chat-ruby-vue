Vue.component('message-input', {
  data: function() {
    return {
      messagePackage: {
        content: ''
      }
    }
  },
  template: '#message-input-template',
  methods: {
    submitMessage: function() {
      this.$emit('submit', this.messagePackage);
      this.messagePackage.content = '';
    }
  }
});
