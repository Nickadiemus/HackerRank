function getCount(objects) {
  var count = 0;
  objects.forEach((o) => {
    if(o.x == o.y) count++
  });
  return count;
}
