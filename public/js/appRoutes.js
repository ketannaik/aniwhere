angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/international', {
			templateUrl: 'views/international.html',
			controller: 'InternationalController'
		})

		.when('/domestic', {
			templateUrl: 'views/domestic.html',
			controller: 'DomesticController'	
		})
		
		.when('/contactus', {
			templateUrl: 'views/contactus.html',
			controller: 'ContactUsController'	
		})
		
		.when('/aboutus', {
			templateUrl: 'views/aboutus.html',
			controller: 'AboutusController'
		});

	$locationProvider.html5Mode(true);

}]);