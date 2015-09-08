angular.module("dB")

.controller('ArticlesCtrl', ['$scope','$http',function($scope,$http){
	$http.get('/articles').success(function(data){
		$scope.articles = data;
	});
}])

angular.module('searchApp.search', ['ui.router', 'articlesService', 'ngTable', 'darthwade.dwLoading'])

.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
      .state('search', {
          url: '/',
          templateUrl: 'search/articles.view.html',
          controller: 'ArticlesCtrl as vm'
      });
}])

.controller('ArticlesCtrl', SearchController);

function ArticlesController (article, ngTableParams, $loading) {
    var vm = this;

    vm.filter = {};

    vm.tableParams = new ngTableParams({
        page: 1,
        count: 10
    }, {
        total: 0,
        getData: function($defer, params) {
                    $loading.start('articles');

                    vm.filter.page = params.page() - 1;
                    vm.filter.pageSize = params.count();

                    article.query(vm.filter).$promise.then(function(article) {
                        params.total(article.paging.count);
                        $defer.resolve(article.data);

                        $loading.finish('articles');
                    });
                 }
    });

    vm.submit = function() {
        vm.tableParams.page(1);
        vm.tableParams.reload();
    }
}