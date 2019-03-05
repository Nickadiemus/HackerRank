function isPositive(a) {
    try{
      if(a == 0) throw "Zero Error"
      else if (a < 0) throw "Negative Error"
      else return "YES"
    }
    catch(errMsg){
      return errMsg
    }
}

isPositive(1)
isPositive(0)
isPositive(-43)
