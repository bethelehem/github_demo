var app = angular.module('myApp',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	'$routeProvider'.
	when('/data',{
		templateUrl:'views/index.html''
		controller : 'myController'
	})
}]);