// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server, // the parse API or other website to which we want to send a request
      type: 'GET', // HTTP verb - tells the server what action  to take
      data: { order: '-createdAt' }, //data sent to the server, which specifies extra options for how the "get" should happen
      contentType: 'application/json', // MIME-type---the format of the content you are providing to the serve
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};


// console.log(10);
// $.ajax({
//   success: function() {
//     console.log(5);
//   }
// });
// console.log(11);