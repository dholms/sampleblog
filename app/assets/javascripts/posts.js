function TermCtrl($scope) {
  $scope.terms = [];
 
  $scope.addTerm = function() {
    $scope.terms.push({text:$scope.termText, select:false});
    $scope.termText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.terms, function(term) {
      count += term.select ? 1 : 0;
    });
    return count;
  };
}