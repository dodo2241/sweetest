var fs = require('fs');

fs.mkdir('tempdir',( e )=>{
	if( e ){
		throw e;
	}
	console.log( 'Created!', e);
});
