// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();

  },

  render: function() {
    console.log(Messages._data);
    for (let msg in Messages._data) {
      MessagesView.renderMessage(Messages._data[msg]);
    }
  },

  renderMessage: function(message) {
    $('#chats').append(MessageView.render(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};