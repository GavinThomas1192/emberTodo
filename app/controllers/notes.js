import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByOwner(param) {
            if (param !== '') {
                return this.get('store').query('owner', { owner: param });
            } else {
                return this.get('store').findAll('notes');
            }
        }
    }
});
