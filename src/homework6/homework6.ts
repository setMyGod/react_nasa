
const user = {
    name:"Max",
    age:18,
    gender:'male'
}

function sum(a:number,b:number):number{
    return a+b
}
function showSum(a:number,b:number){
    console.log(a + b);
}

function incAge(someUser, inc):number{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)