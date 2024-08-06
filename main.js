var varValue = 'var Value';
let letValue = 'let Value';
const constValue = 'const Value';

console.log(varValue);
console.log(letValue);
console.log(constValue);

function functionalArea() {
  var varFunc = 'varFunc';
  let letFunc = 'letFunc';
  const constFunc = 'constFunc';

  console.log(varFunc);
  console.log(letFunc);
  console.log(constFunc);

  varFunc = 'change Func var';
  letFunc = 'change Func let';

  console.log(varFunc);
  console.log(letFunc);

  if (true) {

    var varBlock = 'var Block';
    let letBlock = 'let Block';
    const constBlock = 'const Block';

    console.log(varBlock);
    console.log(letBlock);
    console.log(constBlock);
    
    var varBlock = 'var Block change';
    letBlock = 'let Block change';
   

    console.log(letBlock);
  }
  
}

functionalArea();
console.log(varValue);
console.log(letValue);
console.log(constValue);