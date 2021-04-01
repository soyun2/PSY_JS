const todos=['우유구매','메일확인','필라테스']
for(const i in todos)
{
    console.log(`${(Number(i)+1)}번째 할일 : ${todos[i]}`)
}
for(const work of todos)
{
    console.log(work);
}