(function (){
  'use strict';

  angular.module('LunchChecker',[])
  .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController($scope) {
    $scope.message = "";
    $scope.textVal = "";
    $scope.fontColor = {"color" :  "black"}
<!--Main function -->
    $scope.checkLunch = function() {
      var string = $scope.textVal;
      var splittedArray;
      console.log(string.length);
      if(string.length == 0){
        $scope.message = "Empty";
        $scope.fontColor = {"color": "green"}
      }else {
        splittedArray = string.split(',');
        if(splittedArray.length <= 3){
          $scope.message = "Enjoy!";
          $scope.fontColor = {"color" : "green"};
        }else {
          $scope.message = "Too much!";
          $scope.fontColor = {"color" : "red"}
        }
      }
    }

<!-- Clears message and text input field -->
    $scope.clearField = function(){
      if($scope.message.length != 0){
        $scope.message = "";
      }
      if($scope.textVal.length != 0){
        $scope.textVal = "";
      }
    }
  }
})();
