// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  var result = [];
  var element = element || document.body;

  // if element is 'className' then return it
  var elementClasses = element.classList;
  if (elementClasses) {
  	for (var i=0; i<elementClasses.length; i++) {
  		if (elementClasses[i] === className) {
  			result.push(element);
  		}
  	}
  }

  // if element contains childNodes, then run getElementsByName on each child node
	var childNodes = element.childNodes;
	if (childNodes.length > 0) {
		for (var i=0; i<childNodes.length; i++) {
			var peek = getElementsByClassName(className, childNodes[i]);
			if (peek.join() !== "") result.push(peek[0]);
		}
	}

  return result;
};
