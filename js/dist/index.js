"use strict";

Drupal.behaviors.drupal_block_reactive = {
  attach: function attach(context) {

    // CommentBox component definition.
    var CommentBox = React.createClass({
      displayName: "CommentBox",

      render: function render() {
        return React.createElement(
          "div",
          { className: "commentBox" },
          React.createElement(
            "p",
            null,
            "Drupal behaviors dependency."
          )
        );
      }
    });

    // Render our component.
    ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('recent-comments-react'));
  }
};