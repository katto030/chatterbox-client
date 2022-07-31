// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    var $lobby = $('<option id="room">Lobby</option>');
    RoomsView.$select.append($lobby);

    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    var currRoom = RoomsView.$select.val();
    return currRoom;
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    let newroom = prompt('New room name: ');
    if (newroom === null) {
      alert('Room not created');
    } else if (newroom === '') {
      alert('Not a valid room name');
    } else {
      let $newRoom = $(`<option id="room">${newroom}</option>`);
      RoomsView.$select.append($newRoom);
    }
  }

};
