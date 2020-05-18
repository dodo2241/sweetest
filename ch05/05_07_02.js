var fs = require('fs');

fs.rename('test','test2',function(){
	console.log( 'file renamed' );
});
