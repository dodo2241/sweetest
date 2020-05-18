var https = require('https');

var CrawlData = [];

https.get('https://nodejs.org/dist/latest-v5.x/docs/api/index.json',(res)=>{
	var body = '';
	res.on('data',(d)=>{
		body += d;
	});
	res.on('end',()=>{
		var index_data = JSON.parse( body ).desc;

		for( var i = 0 ; i < index_data.length ; i++ ){
			if( index_data[ i ].type == 'text' ){

				var str = index_data[ i ].text;
				str = str.substr( str.indexOf("[") + 1 );
				var temp_idx = str.indexOf("]");
				var title = str.substr( 0 , temp_idx );

				str = str.substr( temp_idx + 1 );
				var link = str.slice( 1 , -1 );

				CrawlData.push({
					'title': title,
					'link':link
				});
			}
		}

		console.log( CrawlData );

	});
}).on('error',(e)=>{
	console.log( "Error:",e );
});
