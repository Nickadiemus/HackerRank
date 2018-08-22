function timeConversion(s) {
  let converted;
  let arr = s.split('');
  if( s === "12:00:00AM"){
    converted ="00:00:00";
  }
  else if( (s === "12:00:00PM") || s.includes("A")){
    if(s.includes("A") && (parseInt(s.slice(3,5)) > 0) && ((parseInt(s.slice(0,2)) === 12))){
      converted = "00" + s.slice(2,8)
    }else{
      converted = s.slice(0,8);
    }
  }
  else{
    if((parseInt(s.slice(0,2)) === 12) && (parseInt(s.slice(3,5))) > 0){
      converted = s.slice(0,8);
    }
    else{
      var convert = (parseInt(arr[0]+arr[1]) + 12).toString();
      arr = arr.splice(2,6).join('')
      convert += arr
      converted = convert
    }
  }
  return converted
}
