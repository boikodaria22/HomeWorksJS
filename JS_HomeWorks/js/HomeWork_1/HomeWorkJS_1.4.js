//function declaration
var wellcomeString = 'Nice to see you';
var name = 'Daria';

function wellcome(name, wellcomeString) {
	return `${wellcomeString}, ${name}`;

}

wellcome(name, wellcomeString);

//function expression
var wellcomeString = 'Nice to see you';
var name = 'Daria';

var wellcome = function(name, wellcomeString) {
	return `${wellcomeString}, ${name}`;
};

wellcome('Daria', 'Nice to see you');
