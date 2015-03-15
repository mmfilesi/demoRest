 'use strict';

angular.module("demoRest")
	   .factory("mainFactory", ['$http', function($http) {

	   		var propiedadPrivada = "foo";

            return {
            	
            	getPais: function(pais) {

            		if ( !pais ) {
            			return false;
            		}

            		return $http.get("http://restcountries.eu/rest/v1/name/"+pais);            		
                  		
        		},

        		getCiudad: function() {

        		}
            	          
          	}

	   }]);
