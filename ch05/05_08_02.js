var https = require('https');

var CrawlData = [ { title: 'File System', link: 'fs.json' , methods: [] } ];

var url = 'https://nodejs.org/dist/latest-v5.x/docs/api/';

https.get( url +  CrawlData[ 0 ].link ,(res)=>{
	var body = '';
	res.on('data',(d)=>{
		body += d;
	});
	res.on('end',()=>{
		var index_data = JSON.parse( body ).modules[ 0 ].methods;
		for( var i = 0 ; i < index_data.length ; i++ ){
			CrawlData[ 0 ].methods.push({
				textRaw: index_data[ i ].textRaw,
				desc: index_data[ i ].desc,
				signatures: index_data[ i ].signatures
			});
		}

		console.log( CrawlData );
	});
}).on('error',(e)=>{
	console.log( "Error:",e );
});
