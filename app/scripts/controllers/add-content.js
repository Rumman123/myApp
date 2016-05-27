'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('ContentCtrl', ['dataService', function (dataService) {
      var vm = this;
      vm.send = function(){
          var content = {
              id: vm.id,
              title: vm.title,
              body: vm.detail
          };

          dataService.insertContent(content)
            .then(function(response){
                vm.status = 'Inserted Content Successfully!';
            },function(error) {
                 alert("Unable to add"+error.message);
            });
            console.log("content",content);

      }

  }]);
