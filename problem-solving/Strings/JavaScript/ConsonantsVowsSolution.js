/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vow = [];
    var con = [];
    s = s.split('');
    s.forEach((i) => {
        if((/git pull[a|A]|[e|E]|[i|I]|[o|I]|[u|U]/g.test(i))){
          vow.push(i);
        }
        else{
          con.push(i);
        }
    });
    vow.forEach((i) => {
      console.log(i);
    })
    con.forEach((i) => {
      console.log(i);
    })
}
vowelsAndConsonants("javascriptloops");
