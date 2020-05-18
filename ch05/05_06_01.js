var fs = require('fs');

fs.unlink('/workspace/tem/hello',( err )=>{
	if( err ) throw err;
	console.log("successfully deleted /workspace/tem/hello" );
});
