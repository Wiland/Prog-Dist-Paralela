(function () {

	var app = angular.module('ApiApp', []);

	app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {

		$scope.tasks = {};

		/*$http({
			method: 'DELETE',
			url: 'http://localhost:3000/tasks',
			headers: {
				'Content-Type': 'application/json'
			  },
		}).then(function successCallback(response) {
			$scope.tasks = response.data;
		}, function errorCallback(response) {
			$scope.tasks = response.status;
		});*/

		$http({
			method: 'GET',
			url: 'http://localhost:3000/tasks',
			headers: {
				'Content-Type': 'application/json'
			  },
		}).then(function successCallback(response) {
			$scope.tasks = response.data;
		}, function errorCallback(response) {
			$scope.tasks = response.status;
		});
		
		$http({
			method: 'POST',
			url: 'http://localhost:3000/tasks',
			data: { "name": "tarea x", "status":"pendiente"}
		}).then(function successCallback(response) {
			$scope.createdTask = response.data;
		}, function errorCallback(response) {
			$scope.tasks = response.status;
		});

		$http({
			method: 'PUT',
			url: 'http://localhost:3000/tasks/5a0076d417b4582e04f7e437',
			data: { "name": "tarea", "status":"pendiente"}
		}).then(function successCallback(response) {
			$scope.editedTask = response.data;
		}, function errorCallback(response) {
			$scope.tasks = response.status;
		});


	}]);

})();
