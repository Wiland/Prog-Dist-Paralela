(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
		$scope.listado = ["Fernando Herrera", "Melissa Flores", "Juan Carlos Pineda", "Maria Perez"];

		$scope.listadoProfesores = {
			profesores: [{
				nombre: "Pepito Perez",
				edad: 29,
				clase: "POO"
			},
			{
				nombre: "Oscar Salazar",
				edad: 27,
				clase: "CES4"
			},
			{
				nombre: "Luis Lopez",
				edad: 42,
				clase: "CES1"
			}]
		}

}]);





})();
