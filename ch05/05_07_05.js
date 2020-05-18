var fs = require('fs');

fs.readdir('tempdir',( err , files )=>{
	if( err ){
		throw err;
	}
	console.log( files );
});
