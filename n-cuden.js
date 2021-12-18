//n-cuden poligon
function plostina(n)
{
    let sum = 0;
    for(var i = 1; i <= n - 1; i++)
    {
        sum += 2 * i - 1;
    }
    sum *= 2;
    sum += 2 * n - 1;
    return sum;
}

console.log(plostina(5))
