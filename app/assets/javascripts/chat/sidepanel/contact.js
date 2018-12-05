Vue.component('contact', {
  props: ['contacts'],
  template: '#contacts-template',
  methods: {
    openChat: function(contact) {
      contact.active = 'active'
      this.loadContact(contact)
    },
    loadContact: function(contact) {
      let contact_component = this
      axios.get('/chat_apis/' + contact.user_id)
        .then(function(response) {
          contact_component.$parent.$parent.$emit('showChat', response.data)
        })
        .catch(function() {
          console.error("Ops... Deu ruim!\nVeja com o Marcelo Jr. o que rolou :)")
        })
    }
  }
});
