(function() {
  'use strict';

  angular
    .module('startupWeekend')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($mdDialog, $scope) {
    var vm = this;
    $scope.lundi = false;
    $scope.mardi = false;
    $scope.mercredi = false;
    $scope.jeudi = false;
    $scope.vendredi = false;
    $scope.samedi = false;
    $scope.dimanche = false;
    $scope.item = 0;

    $scope.alert = function() {
        if ((!$scope.lundi && !$scope.mardi && !$scope.mercredi
            && !$scope.jeudi && !$scope.vendredi && !$scope.samedi
            && !$scope.dimanche)
            || ($scope.item != 1 && $scope.item != 2 && $scope.item != 3)) {
            swal(
              'Oups...',
              'Tu dois renseigner au moins un jour et sélectionner une formule',
              'error'
            )
        }
        else {
            swal(
              'Génial !',
              'Tu vas maintenant vivre l\'aventure',
              'success'
            )
        }

    }
  }
})();
