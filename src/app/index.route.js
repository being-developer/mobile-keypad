export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('keypad', {
      url: '/',
      templateUrl: 'app/keypad/keypad.html',
      controller: 'KeypadController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
