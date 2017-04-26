import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    savePost(params) {
      var newPost1 = this.store.createRecord('post', params);
      newPost1.save();
      this.transitionTo('index');
    },
  }
});
