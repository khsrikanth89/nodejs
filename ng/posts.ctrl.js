angular.module('app')
.controller('PostsCtrl', function ($scope, PostsSvc) {
  $scope.addPost = function () {
    if ($scope.postBody) {
      PostsSvc.create({
        username: 'unknown',
        body: $scope.postBody
      }).success(function (post) {
        $scope.postBody = null
      })
    }
  }

  PostsSvc.fetch().success(function (posts) {
    $scope.posts = posts
  });

	$scope.$on('ws:new_post', function (_, post) {
		$scope.$apply(function () {
			$scope.posts.unshift(post)
		})
	});

});
