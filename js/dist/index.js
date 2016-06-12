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
        key: "render",
        value: function render() {
          return React.createElement(
            "div",
            { className: "commentBox" },
            React.createElement(CommentList, null)
          );
        }
      }]);

      return CommentBox;
    }(React.Component);

    // CommentList component definition.


    var CommentList = function (_React$Component2) {
      _inherits(CommentList, _React$Component2);

      function CommentList() {
        _classCallCheck(this, CommentList);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentList).apply(this, arguments));
      }

      _createClass(CommentList, [{
        key: "render",
        value: function render() {
          this.comments = [{ title: 'one', date: Date(), key: 1 }];

          // List of comments to render.
          var commentNodes = this.comments.map(function (comment) {
            return React.createElement(
              Comment,
              { title: comment.title, key: comment.key },
              comment.title
            );
          });

          return React.createElement(
            "div",
            { className: "commentList" },
            commentNodes
          );
        }
      }]);

      return CommentList;
    }(React.Component);

    // Comment component definition.


    var Comment = function (_React$Component3) {
      _inherits(Comment, _React$Component3);

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
              { className: "commentTitle" },
              "ph title"
            ),
            React.createElement(
              "span",
              { className: "commentDate" },
              "ph date"
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