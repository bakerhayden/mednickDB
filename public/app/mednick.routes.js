(function() {
    'use strict';

    angular
        .module('Mednick')
        .config(Routes);

    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            /**********************************************/
            /*Public states, accessible without logging in*/
            /**********************************************/
            .state('public', {
                url: '',
                abstract: true,
                template: '<div ui-view="public" flex="grow" layout="column" layout-fill></div>'
            })
            .state('public.layout', {
                url: '',
                abstract: true,
                views: {
                    'public': {
                        templateUrl: 'assets/layouts/public-layout.html'
                    }
                }
            })
            .state('public.layout.login', {
                url: '/login',
                views: {
                    "": {
                        templateUrl: 'app/Login/login.html',
                        controller: 'LoginController as vm'
                    }
                }
            })
            /**********************************************/
            /*Public states, accessible without logging in*/
            /**********************************************/
            .state('private', {
                url: '',
                abstract: true,
                template: '<div ui-view="private" layout="column" flex="grow"></div>'
            })
            .state('private.layout', {
                url: '',
                abstract: true,
                views: {
                    'private': {
                        templateUrl: 'assets/layouts/main-layout.html',
                        controller: function($state) {
                            //TEMP controller just to get logout to work
                            var vm = this;
                            vm.logout = function() { $state.go('public.layout.login') }
                        },
                        controllerAs: 'vm'
                    }
                }
            })
            .state('private.layout.home', {
                url: '/home',
                views: {
                    '': {
                        templateUrl: 'app/Home/home.html',
                        controller: 'HomeController as vm'
                    }
                }
            })
            .state('private.layout.upload', {
                url: '/upload',
                views: {
                    '': {
                        templateUrl: 'app/Upload/upload.html',
                        controller: 'UploadController as vm'
                    }
                }
            })
            .state('private.layout.documents', {
                url: '/documents',
                views: {
                    '': {
                        templateUrl: 'app/Documents/documents.html',
                        controller: 'DocumentsController as vm'
                    },
                    'fab': {
                        template: '<md-button class="md-fab md-fab-bottom-right" ui-sref="private.layout.upload">' + '<md-icon class="material-icons">add</md-icon>' + '</md-button>',
                        controller: function() {}
                    }
                }
            })

    }

})();
