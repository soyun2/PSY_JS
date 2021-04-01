const itemEx=['사과','바나나','귤','바나나','신용원']
console.log(itemEx)
while(itemEx.indexOf('바나나')!=-1){
    itemEx.splice(itemEx.indexOf('바나나'),1)
}
console.log(itemEx)

console.log('continue')
let sum=0
for(let i=0;i<101;i++)
{
    if(i%2==0)
        continue
    else
        sum+=i
}
console.log(sum);