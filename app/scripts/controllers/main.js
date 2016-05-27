'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myApp
 */
myApp.controller('MainCtrl',['dataService',function (dataService) {
  var vm = this;

  fetchContent();

  function fetchContent() {
      dataService.getContent()
      .then(function(response){
        vm.contents = response.data;
      },
      function(error){
        alert("content is not loaded");
      });
  }
}]);
