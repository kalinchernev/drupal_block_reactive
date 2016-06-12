'use strict';

Drupal.behaviors.drupal_block_reactive = {
  attach: function attach(context) {

    // CommentBox component definition.
    var CommentBox = React.createClass({
      displayName: 'CommentBox',

      getInitialState: function getInitialState() {
        return { data: [] };
      },
      render: function render() {
        return React.createElement(
          'div',
          { className: 'commentBox' },
          React.createElement(CommentList, null)
        );
      }
    });

    // CommentList component definition.
    var CommentList = React.createClass({
      displayName: 'CommentList',

      render: function render() {
        var tempComments = [{
          title: 'INTT-1',
          date: Date(),
          key: 1
        }, {
          title: 'INTT-2',
          date: Date(),
          key: 2
        }];

        // List of comments to render.
        var commentNodes = tempComments.map(function (comment) {
          return React.createElement(
            Comment,
            { title: comment.title, key: comment.key },
            comment.title
          );
        });

        return React.createElement(
          'div',
          { className: 'commentList' },
          commentNodes
        );
      }
    });

    // Comment component definition.
    var Comment = React.createClass({
      displayName: 'Comment',

      render: function render() {
        return React.createElement(
          'div',
          { className: 'comment' },
          React.createElement(
            'span',
            { className: 'commentTitle' },
            'title placeholder'
          ),
          React.createElement(
            'span',
            { className: 'commentDate' },
            'date placeholder'
          )
        );
      }
    });

    // Render our component.
    ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('recent-comments-react'));
  }
};