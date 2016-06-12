"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Drupal.behaviors.drupal_block_reactive = {
  attach: function attach(context) {
    // CommentBox component definition.

    var CommentBox = function (_React$Component) {
      _inherits(CommentBox, _React$Component);

      function CommentBox() {
        _classCallCheck(this, CommentBox);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentBox).apply(this, arguments));
      }

      _createClass(CommentBox, [{
        key: "_getComments",
        value: function _getComments() {
          var commentsList = [{ title: "one", date: Date(), id: '223' }, { title: "two", date: Date(), id: '224' }];

          return commentsList.map(function (comment) {
            return React.createElement(Comment, { title: comment.title, date: comment.date, key: comment.id });
          });
        }
      }, {
        key: "render",
        value: function render() {
          var comments = this._getComments();

          return React.createElement(
            "div",
            { className: "comments" },
            comments
          );
        }
      }]);

      return CommentBox;
    }(React.Component);

    // Comment component definition.


    var Comment = function (_React$Component2) {
      _inherits(Comment, _React$Component2);

      function Comment() {
        _classCallCheck(this, Comment);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Comment).apply(this, arguments));
      }

      _createClass(Comment, [{
        key: "render",
        value: function render() {
          return React.createElement(
            "div",
            { className: "comment" },
            React.createElement(
              "span",
              null,
              this.props.title
            ),
            " | ",
            React.createElement(
              "span",
              null,
              this.props.date
            )
          );
        }
      }]);

      return Comment;
    }(React.Component);
    // Render our component.


    ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('recent-comments-react'));
  }
};