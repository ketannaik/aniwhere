angular.module('InternationalController', []).controller('InternationalController', function ($scope, ModalService) {

    // $scope.tagline = 'The square root of life is pi!';

    $scope.showEnquiryForm = function (destination) {
        ModalService.showModal({
            templateUrl: '../../views/enquiryDetails.html',
            controller: 'EnquiryController',
            inputs: {
                destination: destination
            }
        }).then(function (modal) {
            modal.element.modal();
            modal.close.then(function (result) {

            });
        }).catch(function (error) {
           // error contains a detailed error message.
           console.log(error);
        });
    }

});