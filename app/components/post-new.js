import Ember from 'ember';

export default Ember.Component.extend({
  newPostShowing: false,
  actions: {
    newPostShow(){
      this.set('newPostShowing', true);
    },
    savePost(){
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        date: this.get('date'),
        snippet: this.get('snippet'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.set('newPostShowing', false);
      this.sendAction('savePost', params);
    }
  }
});
