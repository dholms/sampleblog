function TermCtrl($scope) {

  //var title = title.split();
  //for (var i=0; i<title.length; i++){};
    $scope.terms = [
    {text:'Placeholder1', select:true},
    {text:'Placeholder2', select:false}];
  //}

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