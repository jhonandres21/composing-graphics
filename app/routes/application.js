import Ember from 'ember';
import mtcars from '../utils/mtcars';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('carData', mtcars);
  }
});