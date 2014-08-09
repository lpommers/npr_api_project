'use strict';

/**
 * @ngdoc function
 * @name nprApiProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nprApiProjectApp
 */
angular.module('nprApiProjectApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  	$scope.news = [];
  	$http.get('https://api.npr.org/query?&output=JSON&apiKey=MDE1ODE3ODQzMDE0MDczMjkzNDU1ZGE0NQ001').success(function(data){
  		$scope.news = data.list.story;
  		console.log($scope.news);
  	});
  }]);

