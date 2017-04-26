import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      console.log("savePost happened");
      console.log(newPost);
      newPost.save();
      this.transitionTo('index');
    },
  }
});
