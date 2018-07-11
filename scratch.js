var obj = {
  a:{
    x: 1,
    y: 5,
    date: "March 14, 1963"
  },
  b:{
    x: 4,
    y: 2,
    date: "June 12, 1968"
  },
  c:{
    x: 3,
    y: 6,
    date: "April 11, 1906"
  }
};

function toArray(obj) {
  var arr = [];
  for (var key in obj) {
    var item = obj[key];
    item.slug = key;
    arr.push(item);
  };
  return arr;
}

var arr = toArray(obj);
arr.sort(
  function(a, b) {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return dateB - dateA;
});
console.log(arr);

var diff = new Date("March 14, 19963")- new Date("March 10, 19963");
console.log(diff);
console.log(diff/(60*60*24*1000));

var stuff =

"far out";
console.log(
  stuff
)
;