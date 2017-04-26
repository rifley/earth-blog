import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // var posts = this.store.findAll('post');
    // var topFiveList = [];
    // console.log(Object.values(posts));
    // for(var i = 0; i<5; i++){
    //   console.log(i);
    //   topFiveList.push(posts[i]);
    // }
    // return topFiveList;
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
