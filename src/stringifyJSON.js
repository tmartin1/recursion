// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	
  var result = "";

  if (nullCheck(obj)) {
  	return;
  } else if (typeof(obj) === "string") {
  	result += "\"" + obj + "\"";
  } else if (typeof(obj) === "boolean" || typeof(obj) === "number" || obj === null) {
  	result += obj;
  } else if (Array.isArray(obj)) {
  	result += "[";
  	for (var i=0; i<obj.length; i++) {
  		if (i>0) result += ",";
  		result += stringifyJSON(obj[i]);
  	}
  	result += "]";
  } else if (typeof(obj) === 'object') {
  	result += "{";
  	var j = 0;
  	for (var x in obj) {
  		if (!nullCheck(obj[x])) {
	  		if (j>0) result += ",";
	  		result += stringifyJSON(x) + ":" + stringifyJSON(obj[x]);
	  		j++;
	  	}
  	}
  	result += "}";
  }
  return result;
};

function nullCheck(item) {
	if (typeof(item) === "undefined" || typeof(item) === "symbol" || typeof(item) === "function") {
  	return true;
  }
  return false;
};
