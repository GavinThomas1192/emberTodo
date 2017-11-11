import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    location: DS.attr(),
    owner: DS.attr(),
    noteType: DS.attr(),
    date: DS.attr(),
    image: DS.attr(),
    description: DS.attr()


});



