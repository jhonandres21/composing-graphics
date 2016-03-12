import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['plot', 'plot-axes'],

  didInsertElement: function() {
    this.renderAxes();
  },

  renderAxes: function() {
    if (!this.$()) {
      return;
    }

    var del = d3.select(this.$()[0]);

    var xAxis = d3.svg.axis()
      .outerTickSize(0)
      .tickPadding(5)
      .innerTickSize(- this.get('height'))
      .scale(this.get('xScale'))
      .orient('bottom');

    var yAxis = d3.svg.axis()
      .innerTickSize(- this.get('width'))
      .outerTickSize(0)
      .tickPadding(5)
      .scale(this.get('yScale'))
      .orient('left');

    del.select('.x.axis')
      .transition()
      .duration(500)
      .call(xAxis);

    del.select('.y.axis')
      .transition()
      .duration(500)
      .call(yAxis);
  }
});