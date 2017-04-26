import Ember from 'ember';

export default Ember.Component.extend({
  updatePostShowing: false,
  actions: {
    updatePostShow(){
      this.set('updatePostShowing', true);
    },
    update(post){
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        image: this.get('image'),
        title: this.get('title'),
        snippet: this.get('snippet'),
      };
      this.set('updatePostShowing', false);
      this.sendAction('update', post, params);
    }
  }
});
