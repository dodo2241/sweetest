var https = require('https');

var CrawlData = [];

var url = 'https://nodejs.org/dist/latest-v5.x/docs/api/';

https.get( url + 'index.json',(res)=>{
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
				var link = str.slice( 1 , -1 ).replace(".html",".json");

				CrawlData.push({
					'title': title,
					'link':link,
					'methods': []
				});
			}
		}

		setTimeout(()=>{
			GetMethod();
		}, 1000 );
	});
}).on('error',(e)=>{
	console.log( "Error:",e );
});

var page_idx = 0;
var GetMethod =()=>{
	console.log( "Get methods");
	https.get( url +  CrawlData[ page_idx ].link ,(res)=>{
		var body = '';
		res.on('data',(d)=>{
			body += d;
		});
		res.on('end',()=>{
			var temp = JSON.parse( body );

			if( !temp || !temp.modules || temp.modules.length == 0 || !temp.modules[ 0 ].methods ){
				page_idx++;
				setTimeout(()=>{
					GetMethod();
				}, 1000 );
				return;
			}

			var index_data = temp.modules[ 0 ].methods;

			for( var i = 0 ; i < index_data.length ; i++ ){
				CrawlData[ page_idx ].methods.push({
					textRaw: index_data[ i ].textRaw,
					desc: index_data[ i ].desc,
					signatures: index_data[ i ].signatures
				});
			}

			if( page_idx < CrawlData.length - 1 ){
				page_idx++;
				setTimeout(function(){
					GetMethod();
				}, 1000 );
			}else{
				console.log( CrawlData );
			}
		});
	}).on('error',(e)=>{
		console.log( "Error:",e );
	});
};
