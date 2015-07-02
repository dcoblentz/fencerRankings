var module = angular.module('fencerRankings');

module.controller('historyController', ['$scope', 'History', 'Chart', '$routeParams',
    function ($scope, History, Chart, $routeParams) {
        $scope.id = $routeParams.fencerId;

        History.get($scope.id)
            .success(function (data) {
                $scope.name = data[0].name;
                $scope.outcomes = data;
            });

        Chart.get($scope.id)
            .success(function (data) {

                $('#chart').highcharts({
                    title: {
                        text: '',
                    },

                    legend: {
                        enabled: false
                    },

                    series: [{
                        name: 'Rating',
                        data: data
                    }]
                });

            });


        $scope.formatDate = function (outcome) {
            return new Date(outcome.date).toDateString();
        };
        
        $scope.getWins = function(outcome) {
            return outcome._bout._fencer1 == $scope.id ? outcome._bout.wins : outcome._bout.losses;
            
        };
        
        $scope.getLosses = function(outcome) {
            return outcome._bout._fencer2 == $scope.id ? outcome._bout.wins : outcome._bout.losses;
        }
        
        $scope.getRatingStyle = function(outcome) {
            if( outcome.newRating > outcome.oldRating ) {
                return 'text-success';
            } else if( outcome.newRating < outcome.oldRating ) {
                return 'text-danger';   
            }
            return '';
        }
        

}]);