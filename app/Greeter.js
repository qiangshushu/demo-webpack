var config = require('./config.json');
import './Greater.css';

module.exports = function() {
	var greet = document.createElement('div');
	greet.textContent = config.greetText;
	return greet;
};