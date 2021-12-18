//romboid
function plostina(d1, d2)
{
  return Math.floor((d1 * d2) / 2);
}

function perimetar(d1,d2){
    return Math.floor(2 * Math.sqrt(Math.pow(d1, 2) + Math.pow(d2, 2)));
}
console.log(plostina(5,6))
console.log(perimetar(5,6))