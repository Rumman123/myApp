myApp.service('dataService',['$http',function($http){

  var urlBase = 'http://jsonplaceholder.typicode.com/posts';


      this.getContent = function(){
          return $http.get(urlBase);
      }

      this.insertContent = function(content) {
          return $http.post(urlBase,content);
      }
}]);
