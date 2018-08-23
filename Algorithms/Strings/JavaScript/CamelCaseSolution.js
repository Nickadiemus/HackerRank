// Complete the camelcase function below.
function camelcase(s) {
  const regex = new RegExp('[^a-z]','g');``
  return ((s.match(regex) || []).length + 1);
}
