// async function without await


async function f1() {
    console.log("this is async function without await");
    return 42; // return a promise(resolved) on top pf 42
    
}

f1()
.then(result =>{
console.log(result);
})
