import Ember from 'ember';

var computed = Ember.computed;
var get = Ember.get;

export default Ember.Component.extend({
  tagName: '',
  classNames: ['plot', 'plot-points'],

  // Optional aesthetics
  radius: 5,

  points: computed('data.@each', 'x', 'y', 'xScale', 'yScale', function() {
    var xScale = this.get('xScale');
    var xKey = this.get('x');
    var yScale = this.get('yScale');
    var yKey = this.get('y');

    return this.get('data').map(d => {
    	var point = {
          x: xScale(get(d, xKey)),
          y: yScale(get(d, yKey))
        };
       point.color = 'blue';

        return point;
    });
  }),
});