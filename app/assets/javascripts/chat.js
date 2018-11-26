//= require vendor/jquery.min
//= require vendor/bootstrap.min
//= require vendor/vue
//= require vendor/hoy3lrg

//= require ./chat/sidepanel
//= require ./chat/content-chat
//= require_self

var app = new Vue({
  el: '#app',
  props: ['contact_info'],
  data: {
    user: {},
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
    this.user = {
      name: 'Javier Boulsonarro',
      image_url: 'http://emilcarlsson.se/assets/mikeross.png'
    };
    this.contacts = [
      {
        user_id: 1,
        active: 'active',
        status_user: 'online',
        img_url: 'http://emilcarlsson.se/assets/harveyspecter.png',
        name: 'Paulim Guedeson',
        preview: 'Vai mudar isso ai mesmo?',
        send_by_user: false
      },
      {
        user_id: 2,
        active: '',
        status_user: 'offline',
        img_url: 'http://emilcarlsson.se/assets/harveyspecter.png',
        name: 'Lulinha Free',
        preview: 'Tem que se f*** e acabou!',
        send_by_user: true
      }
    ];
    this.current_contact = this.contacts[0]
  }
});
