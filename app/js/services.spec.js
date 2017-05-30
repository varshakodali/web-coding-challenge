describe('githubAPIService', function() {
 	var githubAPIService, httpBackend;
 	beforeEach(function() {
 		module('githubApp');
		inject(function ($httpBackend, _githubAPIService_) {
            githubAPIService = _githubAPIService_;
            httpBackend = $httpBackend;
        });
     });
 	afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

      it('GitHub users API HTTP call should get user details', function () {
 
        var returnData = {status: 200, user: "gaeron"};
        httpBackend.expectGET("https://api.github.com/users/gaearon").respond(returnData);
        var returnedPromise = githubAPIService.getUser("gaearon");
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
        httpBackend.flush();
        expect(result).toEqual(returnData);
 	  });
 	  it('GitHub user followers API should get user followers', function () {
 
        var returnData = {status: 200, user: "gaeron"};
        httpBackend.expectGET("https://api.github.com/users/gaearon/followers?page=1").respond(returnData);
        var returnedPromise = githubAPIService.getFollowers("gaearon", 1);
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
        httpBackend.flush();
        expect(result).toEqual(returnData);
 	  });

});
