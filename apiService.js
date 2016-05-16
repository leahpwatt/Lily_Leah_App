var app=angular.module("ourApp");

app.factory("apiService", function($http){

	var randomQuote = "";
	function getRandomQuotes(){//the http is supposed to mashap Quotes generator
		return $http.get("https://andruxnet-random-famous-quotes.p.mashape.com/
");
	}


	return {

		chooseRandomQuote: function(quote){
			randomQuote = quote;
		},

		getRandomQuotes: getRandomQuotes

	};

});