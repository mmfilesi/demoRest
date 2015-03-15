 'use strict';

angular.module("demoRest")
	   .controller("mainController", ['$scope', 'mainFactory', function($scope, mainFactory){

	   $scope.pintaResultado = {

       		pintar:function(data){
       			$scope.respuesta.capital = data[0].capital;
       		}

	   }

		$scope.formulario = {

			enviar: function() {
				
				$scope.respuesta.cargando = "Enviando datos";

				mainFactory.getPais($scope.formulario.pais)
					.success(function(data){
							$scope.pintaResultado.pintar(data);
							$scope.respuesta.cargando = "";

			   		}).error(function(data) {
			   			return "Error";
			   			$scope.respuesta.cargando = "";
			   		});
			
				
			},

			validar: function() {
                  
                 if($scope.formulario.pais.length > 2){
                    this.enviar();
                    $scope.formularioError = false;
                 }
                 else{
                 	$scope.formularioError = true;
                 }
			},

			sendForm: function() {	
				this.validar();
			}
		};

		var init = {

			initVars: function() {
				$scope.titulo 			= "Demo rest";
				$scope.textoInput 		= "Introduce un país";
				$scope.textoSubmit 		= "Enviar";
				$scope.formularioError  =  false;
				$scope.respuesta        = {};
			},

			initAll: function() {
				this.initVars();
			}
		};

		init.initAll();



	}]);