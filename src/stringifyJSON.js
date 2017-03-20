var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '' + '[]';
    } else {
      var arrayToString = [];
      obj.forEach(function(element) {
        arrayToString.push(stringifyJSON(element))
      })
      return '[' + arrayToString + ']';
    } 
  } else if (obj instanceof Object) {
    var keysOfObject = Object.keys(obj);
    var propertiesOfObject = [];
    keysOfObject.forEach(function(key) {
      var keyColonString = '"' + key + '":';
      var value = obj[key];
      if (value instanceof Function || typeof value === undefined) {
        propertiesOfObject.push('');
      } else if (value instanceof Object || typeof value === 'string' || typeof value === 'boolean' || typeof value === 'number' || value === null) {
        propertiesOfObject.push(keyColonString + stringifyJSON(value));
      }
    });
    return '{' + propertiesOfObject + '}';
  }
}