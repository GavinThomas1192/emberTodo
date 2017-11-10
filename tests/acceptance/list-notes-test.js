import { test } from 'qunit';
import moduleForAcceptance from 'to-do/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list notes');

test('should show notes as the home page', function (assert) {
    visit('/');
    andThen(function () {
        assert.equal(currentURL(), '/notes', 'should redirect automatically');
    });
});

test('should link to information about the company.', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
        assert.equal(currentURL(), '/about', 'should navigate to the about page');

    })
});

test('should link to contact information.', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(function () {
        assert.equal(currentURL(), '/contact', 'should be on the contact page')
    })
});

test('should show hard coded notes', function (assert) {
    visit('/');
    andThen(function () {
        assert.equal(find('.note').length, 3, 'should find 3 notes');
    })
});

// test('should filter the list of rentals by city.', function (assert) {
// });

// test('should show details for a selected rental', function (assert) {
// });
