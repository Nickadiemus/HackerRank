function factorial(n){
      var sum = 1;
      for( var i = 1; i < n; i++){
        sum += (sum * i);
      }
      return sum;
}

factorial(5);
