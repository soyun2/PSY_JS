let output = ''
for(let i = 1; i<10; i++)
{
    for(let j=0;j<i;j++)
    {
        output += '*'
    }
    output += '\n'
}
console.log(output)



let reverse2 = ''
for(let i = 1; i<10; i++)
{
    for(let j=0;j<10-i;j++)
    {
        reverse2 += ' '
    }
    for(let j=0;j<i;j++){
        reverse2 += '*'
    }
    reverse2 += '\n'
}
console.log(reverse2)

