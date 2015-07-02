var rankingApp = angular.module('fencerRankings', ['ngRoute', 'fencerRankings.services']);

rankingApp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/rankings', {
            templateUrl: 'components/ranking/rankings.html',
            controller: 'rankingsController'
        }).
        when('/bouts', {
            templateUrl: 'components/bouts/bouts.html',
            controller: 'boutsController'
        }).
        when('/history/:fencerId', {
            templateUrl: 'components/history/history.html',
            controller: 'historyController'
        }).
        otherwise({
            redirectTo: '/rankings'
        });
  }]);

//function RankingsController($scope, Fencers) {
//
//    Fencers.get()
//        .success(function (data) {
//            $scope.fencers = data;
//        });
//
//}


//// public/core.js
//var scotchTodo = angular.module('scotchTodo', []);
//
//function mainController($scope, $http) {
//    $scope.formData = {};
//    
//    $http.get('/api/fencers')
//        .success(function(data) {
//            $scope.fencers = data;
//            console.log(fencers);
//        })
//        .error(function(data) {
//            console.log('Error: ' + data);
//        });
//
//    // when landing on the page, get all todos and show them
//    $http.get('/api/todos')
//        .success(function(data) {
//            $scope.todos = data;
//            console.log(data);
//        })
//        .error(function(data) {
//            console.log('Error: ' + data);
//        });
//
//    // when submitting the add form, send the text to the node API
//    $scope.createTodo = function() {
//        $http.post('/api/todos', $scope.formData)
//            .success(function(data) {
//                $scope.formData = {}; // clear the form so our user is ready to enter another
//                $scope.todos = data;
//                console.log(data);
//            })
//            .error(function(data) {
//                console.log('Error: ' + data);
//            });
//    };
//
//    // delete a todo after checking it
//    $scope.deleteTodo = function(id) {
//        $http.delete('/api/todos/' + id)
//            .success(function(data) {
//                $scope.todos = data;
//                console.log(data);
//            })
//            .error(function(data) {
//                console.log('Error: ' + data);
//            });
//    };
//
//}