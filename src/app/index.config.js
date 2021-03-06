(function() {
  'use strict';

  angular
    .module('startupWeekend')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
