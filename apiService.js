var app=angular.module("routerApp");

app.factory("apiService", function($http){

	var randomQuote = "";
	function getRandomQuotes(){//the http is supposed to mashap Quotes generator
		return $http.post("https://andruxnet-random-famous-quotes.p.mashape.com/",
				{}, 
				{
					headers: {
						"X-Mashape-Key": "Oddf3M91XqmshCmhkachuZEw2PvQp1D8lPyjsntxH8r5SihYJ9",
						'Content-Type': 'application/x-www-form-urlencoded',
						'Accept': 'application/json'	
					}
				}
			);
	}
	return{

		chooseRandomQuote: function(quote){
			randomQuote = quote;
		},

		getRandomQuotes: getRandomQuotes

	};

});
