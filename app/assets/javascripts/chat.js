//= require vendor/jquery.min
//= require vendor/bootstrap.min
//= require vendor/vue
//= require vendor/hoy3lrg
//= require vendor/axios.min

//= require ./chat/sidepanel
//= require ./chat/content-chat
//= require_self

var app = new Vue({
  el: '#app',
  props: ['contact_info'],
  data: {
    contacts: []
  },
  template: '#frame-template',
  methods: {
    updateLastMessage: function(new_message) {
      for(let i = 0; i < this.contacts.length; i++) {
        if(this.contacts[i].user_id == new_message.user_id) {
          this.contacts[i].preview = new_message.content;
          this.contacts[i].send_by_user = (new_message.type == 'sent');
        }
      }
    }
  },
  created: function() {
    chat = this
    axios.get('/chat_apis')
      .then(function(response) {
        chat.contacts = response.data
        chat.current_contact = chat.contacts[0]
      })
      .catch(function(error) {
        alert("Ops... Deu ruim!\nVeja com o Marcelo Jr. o que rolou :)")
      })
  }
});
