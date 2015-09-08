var articlesService = angular.module('articlesService', ['ngResource']);

    articlesService.factory('article', ['$resource',
    function($resource) {
        return $resource(
            'http://localhost:3000/articles/search', {}, {
                    query: {
                    method: 'GET',
                    params: { pageSize:'10', page:'0', orderBy:'name'},
                    isArray: false
                }
            }
        );
    }
]);