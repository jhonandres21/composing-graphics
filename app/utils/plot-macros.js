import Ember from 'ember';

function isString(s) {
  return Ember.typeOf(s) === 'string';
}

export function makeLinearScale(domain, range) {
  return d3.scale.linear()
    .domain(domain)
    .range(range);
}

export function linearScale(dataKey, propKey, rangeMin, rangeMax, padding) {

  var args = Array.prototype.slice.call(arguments).filter(isString);
  args[0] = `${dataKey}.@each`;
  args.push(function() {
    var xs = this.get(dataKey).mapBy(this.get(propKey));
    var domain = d3.extent(xs);
    var r0 = isString(rangeMin) ? this.get(rangeMin) : rangeMin;
    var r1 = isString(rangeMax) ? this.get(rangeMax) : rangeMax;

    if (padding) {
      let paddingDelta = padding * (domain[1] - domain[0]);
      domain[0] -= paddingDelta;
      domain[1] += paddingDelta;
    }

    return makeLinearScale(domain, [r0, r1]);
  });

  return Ember.computed.apply(this, args);
}
