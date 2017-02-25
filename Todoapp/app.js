var app = angular.module('plunker', ['ngRoute']);



app.config(function($routeProvider){
  
  $routeProvider
  .when('/main',{
    templateUrl:'main.html',
    controller:'mainctrl'
  })
    .when('/viewtodo',{
    templateUrl:'viewtodo.html',
    controller:'viewtodoctrl'
  })
  
// .otherwise({
//    redirectTo:'/main'
//  })
})

app.service("usrservice", function () {
this.usrid='0'
});

app.controller('mainctrl', function($scope,$http,usrservice) {
  
  
$http.get("https://jsonplaceholder.typicode.com/users")
  .then(function(response) {
    
      $scope.user = response.data;
  });

// $http.get("data.json")
//   .then(function(response) {
//     alert("h");
//       $scope.user = response.data;
//   });


  $scope.view=function(val){
    
    $scope.index=val;
   usrservice.usrid = $scope.user[$scope.index].id;
    alert(usrid);
  }
  
});
app.controller('viewtodoctrl', function($scope,$http,usrservice) {
  
  
  $http.get("https://jsonplaceholder.typicode.com/todos?userId="+usrservice.usrid)
  .then(function(response) {
      $scope.todo=response.data;
      
  });
  
  
  
  $scope.save=function(val,$http){
    
      $http.get("https://jsonplaceholder.typicode.com/todos/"+val)
  .then(function(response) {
      alert(response.data);
      
  });
  
  
  
    
  }
  
    $scope.del=function(val,$http){
    
      $http.delete("https://jsonplaceholder.typicode.com/todos/"+val)
  .then(function(response) {
      alert(response.data);
      
  });
  
  
  
    
  }
  
  
  
  
  
  
  
  
  
});
