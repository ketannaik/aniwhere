angular.module('EnquiryController', []).controller('EnquiryController', function ($scope, destination, close, Enquiry, toastr) {


    $scope.destination = destination;

    $scope.closeModal = function (result) {
        $('body').removeClass('modal-open'); // To remove modal-open class from body to resolve scroll issue.
        $('.modal-backdrop').remove(); // To remove modal-backdrop class to resolve fading issue
        close(result, 10);
    }

    $scope.sendEnquiry = function () {
        
        $('#spinnerSendDetails').show()
        //Send all the data via email to ashish jobanputra
        var details = {
            'name': $scope.name,
            'email': $scope.email,
            'mobile': $scope.mobile,
            'otherdetails': $scope.questions
        }
        //alert(JSON.stringify(details));

        Enquiry.sendEnquiry(details)
            .then(function (response) {
                $scope.closeModal(0);
                $('#spinnerSendDetails').hide();
                if (response.status === 'success') {
                    toastr.success('Your query has been forwarded to our travel agent', 'Success', {timeOut: 5000})
                } else {
                    toastr.error('Error while sending email. Please try again later', 'Error', {timeOut: 5000});
                }
            }, function (errorResponse) {
                $scope.closeModal(0);
                $('#spinnerSendDetails').hide();
                toastr.error('Error while sending email. Please try again later', 'Error', {timeOut: 5000});
            });
        

    }
});