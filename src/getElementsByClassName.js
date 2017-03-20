var getElementsByClassName = function(specificClassName) {
  var elementsWithClass = [];
  function check (item) {
    var children = item.children;
    var classArray = item.className.split(' ');
    if (classArray.indexOf(specificClassName) >= 0) {
      elementsWithClass.push(item)
    }
    var childrenLength = children.length;
    var index = 0;
    while (index < childrenLength) {
      check(children[index]);
      index++;
    }
  }
  check(document.body);
  return elementsWithClass;
};

