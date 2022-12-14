// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = () =>{}) {
    //use callback
    Parse.readAll((data) => {
      console.log(data);
      // examine the response from the server request:
      Messages._data = {};
      Rooms._data = {};

      for (let message of data) {
        Messages.add(message);
        Rooms.add(message);
      }

      MessagesView.render();
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      //call from rooms.js and messages.js

    });

    callback();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
