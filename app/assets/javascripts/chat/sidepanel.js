//=require ./sidepanel/profile
//=require ./sidepanel/search
//=require ./sidepanel/contact
//=require ./sidepanel/bottom-bar

Vue.component('sidepanel', {
  props: ['user', 'contacts'],
  template: "#sidepanel-template"
});
