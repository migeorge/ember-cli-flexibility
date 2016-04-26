import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('we can access the app root', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('we are applying the proper styles and postcss is processing display:flex', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('#container').length, 1, 'There is a container on the page');
    assert.equal(find('#container').html(), 'this is the container', 'The container has content');

    let stylesheet_link = Ember.$('link[href="assets/dummy.css"]').attr('href');

    assert.equal(stylesheet_link, 'assets/dummy.css', 'The app css is being loaded');

    let stylesheet = '';

    Ember.$.ajax({
      url: stylesheet_link,
      success: function(data) {
        stylesheet = data;
      },
      async: false
    });

    assert.notEqual(stylesheet.indexOf('flex'), -1, 'We are applying display: flex to the container');
    assert.notEqual(stylesheet.indexOf('-js-display'), -1, 'Postcss is processing our css correctly');
  });
});
