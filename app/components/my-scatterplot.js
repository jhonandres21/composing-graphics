import Ember from 'ember';
import {linearScale} from '../utils/plot-macros';

export default Ember.Component.extend({
  classNames: ['my-scatterplot'],

  svgHeight: 500,
  svgWidth: 700,
  margin: 25,
  height: Ember.computed(function(){
  	return this.get('svgHeight') - 2*(this.get('margin'));
  }),
  width: Ember.computed(function(){
  	return this.get('svgWidth') - 2*(this.get('margin'));
  }),

  xScale: linearScale('data', 'x', 0, 'width', 0.05),
  yScale: linearScale('data', 'y', 'height', 0, 0.05),

  didInsertElement: function() {
    
  }
});
