import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {
                id: '1111',
                title: 'Downtown Charm',
                location: 'Charm USA',
                owner: 'Gavin Thomas',
                noteType: 'sports',
                date: new Date(),
                image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
                description: 'This is my very first hard coded notes, one day this will be about mushrooms.'

            },
            {
                id: '1112',
                title: 'Downtown Tokyo',
                location: 'Tokya USA',
                owner: 'Gavin Thomas',
                noteType: 'food',
                date: new Date(),
                image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
                description: 'This is my very first hard coded notes, one day this will be about mushrooms.This is my very first hard coded notes, one day this will be about mushrooms.'
            },
            {
                id: '1113',
                title: 'Downtown China',
                location: 'China USA',
                owner: 'Gavin Thomas',
                noteType: 'sleep',
                date: new Date(),
                image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
                description: 'This is my very first hard coded notes, one day this will be about mushrooms.This is my very first hard coded notes, one day this will be about mushrooms.This is my very first hard coded notes, one day this will be about mushrooms.'
            }
        ]
    }
});
