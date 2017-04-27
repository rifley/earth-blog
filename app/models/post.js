import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  date: DS.attr(),
  snippet: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
