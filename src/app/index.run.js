(function() {
  'use strict';

  angular
    .module('startupWeekend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
