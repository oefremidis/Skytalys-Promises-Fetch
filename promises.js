// let promise = new Promise((resolve, reject) => {
//     // add your code logic here...
//     // resolve(1);
//     // resolve({brand: 'audi', color: 'red'});
//     reject(-1);
// });

// promise
//     .then(result => console.log(result))
//     .catch(error => console.error(`Something is wrong ${error}`));


async function f(){
    let promise = new Promise((resolve, reject) => {resolve(100)});
    let result = await promise
    console.log(result)
}

f()

console.log('code continues here....');