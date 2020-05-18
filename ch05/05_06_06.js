var fs = require('fs');
var str = [];
for( var j = 0 ; j < 1000000 ; j++ ){
	str += "0123456789";
}
var writeopen = fs.createWriteStream('results2.txt', {flags: 'w'});
writeopen.on('open',( data )=>{
	console.log( "open:",data );


	setTimeout(()=>{
		console.log( "Start");
		for( var i = 0 ; i < 100 ; i++ ){
			writeopen.write( str );
		}
		console.log( "End");
	},0);

	setTimeout(()=>{
		console.log( "Test2" );
	},10);

	console.log("Test1");

	setTimeout(()=>{
		writeopen.end(()=>{
			console.log("File Close");
		});
	},10000);
});
