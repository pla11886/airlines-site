
(function () {

    "use strict";

    $(function () {
        //Getting the weather every hour
        setInterval(getWeather, 3600000);

        //Getting the weather first time
        getWeather();

        function getWeather() {
            var cities = ["barcelona", "london", "moscow", "newYork", "paris", "sydney", "telAviv", "tokio"];

            cities.forEach(function (city) {
                console.log(city);
                $.ajax({

                    // Verb: GET / POST
                    type: "GET",

                    // Address: 
                    url: 'https://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + city + '")&format=json',

                    // Error - what to do: 
                    error: function (err) {
                        console.log("Error: " + err.status + ", " + err.statusText);
                        $("#" + city).html("Data is unavailable.");
                    },

                    // Success - what to do: 
                    success: function (result) {
                        var temp = result.query.results.channel.item.condition.temp;
                        var text = result.query.results.channel.item.condition.text;
                        temp = parseInt(temp);

                        temp = Math.round((temp - 32) * 5 / 9);
                        console.log('city', city, 'temp', temp, 'text', text);
                        $("#" + city).html("Temperature: " + temp + " °С " + "<br />" + text);
                    }
                });
            });
        }
    });
})();