var climateTypes = ['tropical', 'dry', 'temperate', 'continental'];
var transportTypes = ['dense', 'sparse'];
var price = ['$', '$$', '$$$', '$$$$', '$$$$$'];

var randomFromArray = function(arr) {
  return arr[(~~(Math.random() * arr.length))];
};

export default {
  climate: function() {
    return randomFromArray(climateTypes);
  },
  transport: function() {
    return randomFromArray(transport);
  },
  price: function() {
    return randomFromArray(price);
  }
};
