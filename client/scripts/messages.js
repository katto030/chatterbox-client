// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  //will display the messages on the page
  // add to, and generally interact with the messages.


  add: function(message) {
    //add to data object
    var key = message['message_id'];

    var value = {
      username: message['username'],
      message: message['text'],
      roomname: message['roomname']
    };
    Messages._data[key] = value;
  },

  displayAll: function() {
    //display messages on the page
  },

  retrieve: function(messageID) {
    //grab the message
    // if messageID is found inside of data object
    //return that message
  }

};

/*{messageId: {txt:
               username:
               roomName:
               }}*/

//returns items
//add to messages datastructure
//update data structure
//conform data