// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <!--
      <div class="chat">
        <div class="username"></div>
          <p><%-${}%><%-${}%%></p>
        <div></div>
      </div>
      -->
    `)

};

// need another method to append to where it needs to go
// somewhere there should be a loop