let item = 5;
console.log('count: ',item);
console.log('count: %d' , item);
console.log(`count: ${item}`);
console.log('-----------')
const object_item = {a:1,b:'c'}
console.log(1, object_item);
console.log('-----------');
console.log('-----------');
console.log("\033[36m"+new Date()+"\033[0m:");

setInterval(()=>{
	console.log("Now Time is", new Date());
}, 5*1000);