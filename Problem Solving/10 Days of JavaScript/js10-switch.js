function getLetter(s) {
    let letter;
    // Write your code here
    var setA = ['a','e','i','o','u']
    var setB = ['b','c','d','f','g']
    var setC = ['h','j','k', 'l','m']
    if(setA.includes(s[0])){
      letter = 'A';
    }
    else if(setB.includes(s[0])){
      letter = 'B';
    }
    else if(setC.includes(s[0])){
      letter = 'C';
    }
    else{
      letter = 'D';
    }
    return letter;
}
