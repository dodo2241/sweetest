var fs = require('fs');

fs.stat('test2',(err, stats)=>{
	if( err ){
		console.log( err );
		return;
	}
	console.log( stats );
});
