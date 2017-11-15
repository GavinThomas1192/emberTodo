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


  let notes = [
    {
      type: 'notes',
      id: '1111',
      attributes: {
        title: 'Downtown Charm',
        location: 'Charm USA',
        noteType: 'Fishing',
        owner: 'Gavin Thomas',
        date: new Date(),
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        description: 'This is my very first hard coded notes, one day this will be about mushrooms.'
      }

    },
    {
      type: 'notes',
      id: '1112',
      attributes: {
        title: 'Downtown Tokyo',
        location: 'Tokya USA',
        noteType: 'Hiking',
        owner: 'Gavin Thomas',
        date: new Date(),
        image: 'http://www.publicdomainpictures.net/pictures/110000/velka/rustic-hiking-trail.jpg',
        description: 'This is my very first hard coded notes, one day this will be about mushrooms.This is my very first hard coded notes, one day this will be about mushrooms.'
      }
    },
    {
      type: 'notes',
      id: '1113',
      attributes: {
        title: 'Downtown China',
        location: 'China USA',
        noteType: 'Sleeping',
        owner: 'Gavin Thomas',
        date: new Date(),
        image: 'https://c.pxhere.com/photos/53/57/clay_valley_black_forest_hut_cottages_meadow_green_nature_place_of_power-1338141.jpg!d',
        description: 'This is my very first hard coded notes, one day this will be about mushrooms.This is my very first hard coded notes, one day this will be about mushrooms.This is my very first hard coded notes, one day this will be about mushrooms.'
      }
    },
    {
      type: 'notes',
      id: '1114',
      attributes: {
        title: 'Downtown China',
        location: 'China USA',
        noteType: 'Sleeping',
        owner: 'Nichole Doyle',
        date: new Date(),
        image: 'https://c.pxhere.com/photos/53/57/clay_valley_black_forest_hut_cottages_meadow_green_nature_place_of_power-1338141.jpg!d',
        description: 'This is my very first hard coded notes, one day this will be about mushrooms.This is my very first hard coded notes, one day this will be about mushrooms.This is my very first hard coded notes, one day this will be about mushrooms.'
      }
    }
  ]

  this.get('/notes', function (db, request) {
    if (request.queryParams.owner !== undefined) {
      let filteredNotes = notes.filter(function (i) {
        return i.attributes.owner.toLocaleLowerCase().indexOf(request.queryParams.owner.toLocaleLowerCase()) !== -1;
      })
      return { data: filteredNotes };
    } else {
      return { data: notes };
    }
  })
}

