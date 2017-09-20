angular.module('EnquiryService', []).factory('Enquiry', ['$http', '$q', function($http, $q) {
    
        return {
            sendEnquiry: sendEnquiry
        }

        function sendEnquiry(data) {
            var request = $http({
                method: 'POST',
                url: '/api/sendenquiry',
                data: data
              });
      
              return (request.then(handleSuccess, handleError));
        }

        function handleSuccess(response) {
            return response.data;
          }

          function handleError(response) {
            if (!angular.isObject(response.data) ||
              !response.data.message) {
              return $q.reject('An Unknown error occurred.');
            }
            return $q.reject(response.data.message);
          }
    
    }]);