(function() {
  'use strict';

  angular
    .module('startupWeekend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($mdDialog, $scope, $state) {
    var vm = this;


    $scope.openDialog = function($index) {
        var exp;
        if ($index == 1) {
            var exp = $mdDialog.confirm({
                templateUrl: 'app/components/dialogs/exp1.tmpl.html',
                controller: function DialogController($scope, $mdDialog) {
                    $scope.closeDialog = function() {
                        $mdDialog.hide();
                    }

                    $scope.start = function() {
                        $mdDialog.hide();
                        $state.go('register');
                    }
                }
            });
        }
        if ($index == 2) {
            var exp = $mdDialog.confirm({
                templateUrl: 'app/components/dialogs/exp2.tmpl.html',
                controller: function DialogController($scope, $mdDialog) {
                    $scope.closeDialog = function() {
                        $mdDialog.hide();
                    }
                }
            });
        }
        $mdDialog.show(exp).then(function() {
            console.log("here");
        });
    }
  }
})();
