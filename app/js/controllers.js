angular.module('githubApp').
controller('githubCtrl', function($scope, $location, $log, githubAPIService) {

	$scope.loaded = false;
	$scope.notFound = false;
	$scope.loadMore = false;
	$scope.followertable = false;
	$scope.count = null;
	$scope.loader = false;
	var pageCount = 1;

	$scope.triggerHTTPCall = function() {
		if((''+$scope.username).length > 3)  $scope.getGitUserInfo();
	}

	$scope.getGitUserInfo = function() {
		$scope.loader = true;
		if(('' + $scope.username).length > 0) {
			githubAPIService.getUser($scope.username).then(function(response){ 
				$scope.followerTable = false;
	   			$scope.userDetails = response.data;
	   			$scope.notFound = false;
	   			$scope.loaded = true;
	   			$scope.loadMore = false;
	   			$scope.loader = false;
	   			if(response.data.followers > 0) {
	   				$scope.followerTable = true;
	   				if(response.data.followers > 30 ) $scope.loadMore = true;
	   				else $scope.loadMore = false;
	   				githubAPIService.getFollowers($scope.username, 1)
	   				.then(function(response) {
	   					$scope.loader = false;
	   					$scope.followersList = response.data;
	   				});
	   			}
	   			$log.info("githubCtrl controller getGitUserInfo() successful!");
			});
		}
		else {
			$scope.notFound = true;
      		$scope.loaded = false;
      		$scope.loader = false;
		}
	};

	$scope.loadData = function() {	
		pageCount = pageCount + 1;
		if(pageCount >= $scope.userDetails.followers/30 ) {
			$scope.loadMore = false;
		} 
		else {
			var followers = githubAPIService.getFollowers($scope.username, pageCount);
			followers.then(function(response) {
				$scope.followerTable = true;
	   			$scope.followersList = response.data;
	   			$log.info("githubCtrl controller loadData() successful!");
	   		});
		}
	}
});