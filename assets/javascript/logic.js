$(function() {


var config = {
    apiKey: "AIzaSyBvh5yl6Cfm0XKPY1LEpdFhY9uBM27z_58",
    authDomain: "pokemon-roster-analyser.firebaseapp.com",
    databaseURL: "https://pokemon-roster-analyser.firebaseio.com",
    projectId: "pokemon-roster-analyser",
    storageBucket: "pokemon-roster-analyser.appspot.com",
    messagingSenderId: "1017675494181"
  };
  firebase.initializeApp(config);

  $("button").on("click", function() {
      var search = $(this).attr("data-tweet");
      var queryURL = "	https://api.twitter.com/oauth/access_token=4875818472-9lJS2CiuCwFSHrJafu9s3J0IR3OyCdATw5mHoNJ" + search + "";

      $.ajax({
          url:queryURL,
          method: "GET"
      }).then(function(response) {
          console.log(response);
      });
  });


});