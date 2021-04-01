let pyramid = ''
let count = 1;
let n = 15;
for(let i=1; i<n+1;i++)
{
    for(let j=n+1-i; j>0;j--)
    {
        pyramid  += " "
    }
    for(let j=1; j<count*2; j++)
    {
        pyramid += "*"
    }
    count ++
    pyramid += '\n'
}
console.log(pyramid)