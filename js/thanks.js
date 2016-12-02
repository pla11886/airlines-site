(function () {

    "use strict"

    $(document).ready(function () {
        
        //Filling details from URL
        fillDetails();

        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        function fillDetails() {

            //get fullName parametr from URL
            var name = getParameterByName('fullName');

            // get span element by ID
            var detailsSpan = document.getElementById('detailsSpan');

            //get date parametr from URL
            var date = getParameterByName('date');

            //get email parametr from URL
            var email = getParameterByName('email');

            //fill details into the span
            detailsSpan.innerHTML = "  Passenger: " + name + "</br>" + "  Your flight Date: " + date + "</br>" + " Your Email: " + email + "<br />";

        }
        //Showing modal
        $('#myModal').modal({
            show: true
        });
    });
})();









