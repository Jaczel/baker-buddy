app.controller('myCtrl', function($scope) {
    $scope.flour=250;
    $scope.water=180;
    $scope.salt=0;
    $scope.yeast=0;
    $scope.total=180/250*100;
    $scope.updateTotal = function() {
        var total = $scope.water / $scope.flour * 100;
        $scope.total = Math.round(total);
    };
});
