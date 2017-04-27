import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentShowing: false,
  actions: {
    updateCommentShow(){
      this.set('updateCommentShowing', true);
    },
    updateComment(comment){
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        commentContent: this.get('commentContent')
      };
      this.set('updateCommentShowing', false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
