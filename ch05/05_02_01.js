const filesystem_var =require('fs');
filesystem_var.unlink('/workspace/tem/hello',(err)=>{
	if(err){
		throw err;
		return;
	}
	
	console.log('delete success')
})