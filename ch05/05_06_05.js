
var fs = require('fs');
var fd = fs.createWriteStream('data.txt',{flags: 'w'});


fd.on('open',()=>{
	fd.write("Data");

	fd.end(()=>{
		console.log("END");
	});
});
