const fruitrouges = ["fraise","framboise","cerise"];
for (let fruit of fruitrouges) {
 console.log(`la ${fruit} c'est bon !`);}
fruitrouges.forEach(fruit => {
console.log(`la ${fruit} c'est bon!`);
});
const nombres= [13, 3, 4, 10];
let doubles= nombres.map(n=>n*2);
console.log(doubles);
let d2=nombres.forEach(n=>console.log(n*2));