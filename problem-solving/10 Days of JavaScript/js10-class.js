class Polygon {
  constructor(size){
    this.sides = size;
  }
  perimeter(){
    var perim = 0;
    this.sides.forEach((a) => {
        perim += a;
    })
    return perim;
  }
}

let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter());
