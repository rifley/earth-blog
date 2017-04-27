import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
      if(confirm('Are you sure you wanna do that?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
