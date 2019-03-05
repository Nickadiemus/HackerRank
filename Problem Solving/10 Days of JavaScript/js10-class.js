class Polygon {
  constructor(size){
    // try{
    //   console.log(size.length);
    //   if(size.length == 3){
        this.a = size[0];
        this.b = size[1];
        this.c = size[2];
    //   }
    //   else{
    //     throw "Size must be length of 3"
    //   }
    // }
    // catch(err){
    //   console.log(err);
    // }
  }
  perimeter(){
    return this.a + this.b + this.c
  }
}

let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter());
