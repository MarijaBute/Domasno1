//triagolnik
function plostina (s1,s2,s3){
    var s = (s1+s2+s3)/2;
    return Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));
  }
   
   function perimetar (s1,s2,s3){
     return s1+s2+s3;
   }
   console.log(plostina(5,4,6))
   console.log(perimetar(5,4,6))