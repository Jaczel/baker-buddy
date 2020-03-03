app.controller('bakerBuddyCtrl', function($scope) {
  $scope.flour=250.0;
  $scope.water=180.0;
  $scope.salt=5.0;
  $scope.yeast=1.75;
  $scope.hydration=$scope.water / $scope.flour * 100;
  $scope.saltation=$scope.salt / $scope.flour * 100;
  $scope.yeastation=Math.round($scope.yeast / $scope.flour * 100);
  $scope.updateHydration = function() {
    if ($scope.flour) {
      $scope.hydration = Math.round($scope.water / $scope.flour * 100);
    } else {
      $scope.hydration = 100.0;
    }
  };
  $scope.updateSalt = function() {
    if ($scope.flour) {
      $scope.saltation = Math.round($scope.salt / $scope.flour * 100);
    } else {
      $scope.saltation = 0.0;
    }
  };
  $scope.updateYeast = function() {
    if ($scope.flour) {
      $scope.yeastation = Math.round($scope.yeast / $scope.flour * 100);
    } else {
      $scope.yeastation = 0.0;
    }
  };
  $scope.updatePercentages = function() {
    $scope.updateHydration();
    $scope.updateYeast();
    $scope.updateSalt();
  };
});
