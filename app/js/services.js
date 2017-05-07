angular.module('githubApp').
  factory('githubAPIService', function($http, $log) {

    var getUser = function(username) {

      return $http({method:"GET", url:"https://api.github.com/users/" + username})
        .success(function (data) {
          $log.info("githubAPIService getUser() successful!");
          return data;
        })
        .error(function (err) {
          $log.error("githubAPIService getUser() error for " + username + ": " + err);

        });
    };

    var getFollowers = function(username, page) {

      return $http({method:"GET", url:"https://api.github.com/users/" + username + "/followers?page=" + page })
      .success(function(result){
        $log.info("githubAPIService getFollowers() successful!");
        return result;
      })
      .error(function (err) {
        $log.error("githubAPIService getFollowers() error for user " + username + err);
      });
    }
    return { getUser: getUser, getFollowers: getFollowers };
});