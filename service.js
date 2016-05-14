var app = angular.module("ourApp");

app.factory("appService", function($http){
	var palindrome = "";
	function getPalindrome(str){
		var revPalindrome = str.toLowerCase("").split("").reverse().join("");
		if (str === revPalindrome){
			return true;
		}
		else {
			return false;
		}
	}

	return {
		palindromeReveal: function(word){
			palindrome: word;
		}
	};
});