/*
  Please add all Javascript code to this file.
*/
'use strict'


		var params = "{}";
		$.ajax({
		    url: "http://eventregistry.org/json/minuteStreamArticles",
		    crossDomain: true,
		    data: params,
		    method: 'GET',
		}).done(function(result) {
		    console.log(result);
		    contentHandler(result);
		}).fail(function(err) {
		    console.error(err.statusText);
		    
		    });

		
		

	var url = 'https://newsapi.org/v2/everything?' +
	          'q=Apple&' +
	          'from=2018-01-08&' +
	          'sortBy=popularity&' +
	          'apiKey=d1ed5ab997894e5cac87691074534277';

	var req = new Request(url);

	//fetch(req)
	  //  .then(function(response) {
	   //     console.log(response.json());
	  //  })
		 

	function contentHandler(result){
		//const source_name = result.object.articles[0].source
		//const source_name2= promise.object.
		$.each(result.recentActivity.articles.activity, function (i){
console.log(result.recentActivity.articles.activity[i].title)
		});


	}



