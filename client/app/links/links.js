angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here

  Links.allLinks().then(function(links){
    $scope.links = links.data;
  });

});
