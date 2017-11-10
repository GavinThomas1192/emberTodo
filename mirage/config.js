export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.namespace = '/api';

  this.get('/notes', function () {
    return {
      data: [
        {
          id: '1111',
          title: 'Downtown Charm',
          location: 'Charm USA',
          owner: 'Gavin Thomas',
          date: new Date(),
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'This is my very first hard coded notes, one day this will be about mushrooms.'

        },
        {
          id: '1112',
          title: 'Downtown Tokyo',
          location: 'Tokya USA',
          owner: 'Gavin Thomas',
          date: new Date(),
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'This is my very first hard coded notes, one day this will be about mushrooms.This is my very first hard coded notes, one day this will be about mushrooms.'
        },
        {
          id: '1113',
          title: 'Downtown China',
          location: 'China USA',
          owner: 'Gavin Thomas',
          date: new Date(),
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'This is my very first hard coded notes, one day this will be about mushrooms.This is my very first hard coded notes, one day this will be about mushrooms.This is my very first hard coded notes, one day this will be about mushrooms.'
        }
      ]
    }
  })
}
