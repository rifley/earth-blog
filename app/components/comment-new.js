import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        commentContent: this.get('commentContent'),
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    },
    deleteComment() {
      
    }
  }
});
