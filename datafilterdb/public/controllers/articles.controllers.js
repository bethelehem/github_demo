angular.module("dB")

.controller('ArticlesCtrl', ['$scope','$http',function($scope,$http){
	$http.get('/articles').success(function(data){
		$scope.articles = data;
	});
}])