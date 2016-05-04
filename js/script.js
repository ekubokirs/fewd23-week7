$(document).ready(function(){
  // Make sure that javascript is correctly connected
  console.log("Page Ready");

  // Create an array with the values I want to use
  var cities = ["Austin", "Los Angeles", "New York", "San Franscisco", "Sydney"];
  // Check that cities has the correct values
  console.log(cities);

  // Set up the for loop so that it runs through the array I created increasing by one each time it runs
  
  for(var i=0; i<cities.length; i++){

    // Append the city names into the existing selector in the html
    // I am targeting the id of the select in order to add more options
    // cities[i] will add each element of the array as the loop runs

    $("#city-type").append("<option>"+cities[i]+"</options>");

  }

  // This is the user action that is going to trigger my background to change
  // Changing the value is not a submit type so we use change instead of submit
  $("#city-type").change(selectBackground);

  // Function to change the background based on input
  function selectBackground(){
    // Create a new variable called city and take the value from our input
    var city = $("#city-type").val();
    // verify that we have captured the value correctly
    console.log(city);

    // Check the value of city against each city name to select the correct backgroun
    // Remove all classes on the body and then add the new background

    if(city=="Austin"){
      $("body").removeClass().addClass("austin");
    }
    else if (city=="Los Angeles"){
      $('body').removeClass().addClass('la');
    }
    else if (city=="New York"){
      $('body').removeClass().addClass('nyc');
    }
    else if (city == "San Franscisco"){
      $('body').removeClass().addClass('sf');
    }
    else if (city == "Sydney"){
      $('body').removeClass().addClass("sydney");
    }
    // Adding this just in case there is an error or if a user chooses "Select an option"
    else{
      $('body').removeClass();
    }
  }

});