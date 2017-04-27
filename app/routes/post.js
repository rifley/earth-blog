import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    delete(post){
      if(confirm("Are you sure you want to delete this post?")){
        var comment_deletions = post.get('comments').map(function(comment) {
          return comment.destroyRecord();
        });
        Ember.RSVP.all(comment_deletions).then(function(){
          return post.destroyRecord();
        });
        this.transitionTo('index');
      }
    },
    update(post, params) {
      Object.keys(params).forEach(key=>{
        if(params[key]!==undefined){
          post.set(key, params[key]);
        }
      });
      post.save();
    },
    updateComment(comment, params) {
      Object.keys(params).forEach(key=>{
        if(params[key]!==undefined){
          comment.set(key, params[key]);
        }
      });
      comment.save();
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', post);
    },
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('post');
    }
  }
});
