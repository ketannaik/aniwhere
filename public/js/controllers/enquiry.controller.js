angular.module('EnquiryController', ['EnquiryService']).controller('EnquiryController', function ($scope, destination, close) {


    $scope.destination = destination;
    
    $scope.closeModal = function(result) {
        $('body').removeClass('modal-open'); // To remove modal-open class from body to resolve scroll issue.
        $('.modal-backdrop').remove(); // To remove modal-backdrop class to resolve fading issue
        close(result, 10);
    }

    $scope.sendEnquiry = function() {
        $('#spinnerSendDetails').show();
        //Send all the data via email to ashish jobanputra
        var details = {
            'name': $scope.name,
            'email': $scope.email,
            'mobile': $scope.mobile,
            'otherdetails': $scope.questions
        }
        alert(JSON.stringify(details));
        $('#spinnerSendDetails').hide();
        $scope.closeModal(0);
    }



});