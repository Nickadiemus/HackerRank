var states = [1,2,3,4,5,6,7,8,9];

function rotate(){
  var tempStates = [];
  var counter = 0;
  for(var i = 0; i < states.length; i++){
    switch(i){
      case 0:
        tempStates[i] = states[i+3];
        break;
      case 1:
        tempStates[i] = states[i-1];
        break;
      case 2:
        tempStates[i] = states[i-1];
        break;
      case 3:
        tempStates[i] = states[i+3];
        break;
      case 4:
        tempStates[i] = states[i];
        break;
      case 5:
        tempStates[i] = states[i-3];
        break;
      case 6:
        tempStates[i] = states[i+1];
        break;
      case 7:
        tempStates[i] = states[i+1];
        break;
      case 8:
        tempStates[i] = states[i-3];
        break;
      default:
        break;
    }
  }
  states = tempStates;
  states.forEach((a,i) => {
    document.getElementById(("btn"+(i+1))).innerHTML = a;
  })

}
