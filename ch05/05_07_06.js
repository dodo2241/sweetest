var fs = require('fs');
var tst;
fs.readdir('tempdir',( err , files )=>{
	tst =files;

});
fs.unlink(tst,()=>{
	console.log( 'file unlinked' +tst);
	});
fs.rmdir('tempdir',( err , files )=>{
	if( err ){
		throw err;
	}

	console.log( err );
});
