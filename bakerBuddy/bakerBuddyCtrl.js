app.controller('bakerBuddyCtrl', function($scope) {
    $scope.flour=250;
    $scope.water=180;
    $scope.salt=0;
    $scope.yeast=0;
    $scope.hydration=$scope.water / $scope.flour * 100;
    $scope.saltation=0;
    $scope.yeastation=0;
    $scope.updateHydration = function() {
        var hydration = 0;
        if ($scope.flour) {
            hydration = $scope.water / $scope.flour * 100;
            $scope.hydration = Math.round(hydration);
        } else {
            $scope.hydration = 100;
        }
    };
    $scope.updateSalt = function() {
        var saltation = 0;
        if ($scope.flour) {
            saltation = $scope.salt / $scope.flour * 100;
            $scope.saltation = Math.round(saltation);
        } else {
            $scope.saltation = 0;
        }
    };
    $scope.updateYeast = function() {
        var yeastation = 0;
        if ($scope.flour) {
            yeastation = $scope.yeast / $scope.flour * 100;
            $scope.yeastation = Math.round(yeastation);
        } else {
            $scope.yeastation = 0;
        }
    };
    $scope.updatePercentages = function() {
        $scope.updateHydration();
        $scope.updateYeast();
        $scope.updateSalt();
    };
});
