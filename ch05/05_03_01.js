var http = require('http');

http.createServer( ( req , res )=>{
	res.writeHead( 200 , {'Content-Type':'text/plain'});
	//res.end('Hello World\n');
	let send_str ="Hello World!\n";
	send_str +="Hello World2";
	//res.end(send_str);
	
	res.write("Hello World\n");
	res.write("Hello World2\n");
	//res.end(send_str);
	res.write("Hello\n");
	setTimeout(()=>{
		res.write("World\n");
		res.end();
	},1000);
	res.write("World\n");
	setInterval(()=>{
		res.end();
	},1000);
}).listen( 8800 ,()=>{
	console.log( "Server listen started", new Date() );
});

console.log( "Server running" , new Date() );
