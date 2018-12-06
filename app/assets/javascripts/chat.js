//= require vendor/jquery.min
//= require vendor/bootstrap.min
//= require vendor/vue
//= require vendor/web_socket
//= require vendor/hoy3lrg
//= require vendor/axios.min

//= require ./chat/sidepanel
//= require ./chat/content-chat
//= require_self

var app = new Vue({
  el: '#app',
  props: ['contact_info'],
  data: {
    user: null,
    contacts: [],
    current_contact: null
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
    },

    loadUserInfo: function() {
      let chat = this
      // Load UserInfo
      axios.get('/chat_apis/user_info')
        .then(function(response) {
          chat.user = response.data
        })
        .catch(function(error) {
          console.error("Ops... Deu ruim!\nVeja com o Marcelo Jr. o que rolou :)")
        });
    },

    loadContacts: function() {
      // Load Contacts
      axios.get('/chat_apis')
        .then(function(response) {
          chat.contacts = response.data
        })
        .catch(function(error) {
          console.error("Ops... Deu ruim!\nVeja com o Marcelo Jr. o que rolou :)")
        })

      this.$on('showChat', function(contact) {
        chat.current_contact = contact
      })
    },

    submitMessage: function(message) {
      axios.post('/chat_apis/' + chat.current_contact.id + '/new_message', {
        body: message
      })
      .then(function(response) {
        console.log("Mensagem enviada com sucesso!");
      })
      .catch(function(error) {
        console.error("Ops... Deu ruim!\nVeja com o Marcelo Jr. o que rolou :)")
      })
      this.current_contact.messages.push({
        type: "sent",
        contact_img: chat.user.image_url,
        body: message
      })
    }
  },
  created: function() {
    chat = this
    chat.loadUserInfo();
    chat.loadContacts();
    this.$on('submitMessage', chat.submitMessage)
  }
});


// Config Vue
window.WS = new WebSocket('ws://localhost:3000/cable');
WS.onmessage = function(e){
  data = JSON.parse(e.data)
  if(data.message && data.message.message && data.message.message.send_id != app.user.id) {
    app.current_contact.messages.push(data.message.message);
  }
};
WS.onopen = function() {
  WS.send(JSON.stringify({
    command: 'subscribe',
    identifier: JSON.stringify({ channel: "ChatChannel" })
  }));
};
