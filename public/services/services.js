var module = angular.module('fencerRankings.services', []);

module.factory('Fencers', function ($http) {
    return {
        get: function () {
            return $http.get('/api/fencers');
        },
        delete: function (id) {
            return $http.delete('/api/fencers/' + id);
        }
    }
});

module.factory('Bouts', function ($http) {
    return {
        get: function () {
            return $http.get('/api/bouts');
        },
        delete: function (id) {
            return $http.delete('/api/bouts/' + id);
        }
    }
});

module.factory('History', function ($http) {
    return {
        get: function (id) {
            return $http.get('/api/history/' + id);
        },
    }
});

module.factory('Chart', function ($http) {
    return {
        get: function (id) {
            return $http.get('/api/chart/' + id);
        },
    }
});