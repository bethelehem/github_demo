var app = angular.module('dB',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/articles', {
		templateUrl: 'views/articles.view.html',
		controller: 'ArticlesCtrl'
	})
}]);