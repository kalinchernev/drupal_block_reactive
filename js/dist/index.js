'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file
 * Attaching React component via Drupal behaviors..
 */

Drupal.behaviors.drupal_block_reactive = {
  attach: function attach(context) {
    // CommentBox component definition.

    var CommentBox = function (_React$Component) {
      _inherits(CommentBox, _React$Component);

      function CommentBox() {
        _classCallCheck(this, CommentBox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentBox).call(this));

        _this.state = {
          comments: []
        };
        return _this;
      }

      _createClass(CommentBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this._fetchData();
          setInterval(this._fetchData, this.props.timeInterval);
        }
      }, {
        key: '_fetchData',
        value: function _fetchData() {
          var _this2 = this;

          jQuery.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function success(comments) {
              return _this2.setState({ comments: comments });
            },
            error: function error(xhr, status, err) {
              console.error(_this2.props.url, status, err.toString());
            }
          });
        }

        // Private method gets data from state and returns array of components.

      }, {
        key: '_getComments',
        value: function _getComments() {
          // Get the list of comments from the state.
          var commentsList = this.state.comments;
          // Return an array of sub-components.
          if (commentsList.length > 0) {
            return commentsList.map(function (comment) {
              return React.createElement(Comment, {
                subject: comment.subject,
                changed: comment.changed,
                key: comment.cid
              });
            });
          }
          return React.createElement(
            'p',
            null,
            Drupal.t('No comments.')
          );
        }
      }, {
        key: 'render',
        value: function render() {
          var comments = this._getComments();
          return React.createElement(
            'div',
            { className: 'comments' },
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
        key: 'render',
        value: function render() {
          return React.createElement(
            'div',
            { className: 'comment' },
            React.createElement(
              'span',
              null,
              this.props.subject
            ),
            ' | ',
            React.createElement(
              'span',
              null,
              this.props.changed
            )
          );
        }
      }]);

      return Comment;
    }(React.Component);
    // Render our component.


    ReactDOM.render(React.createElement(CommentBox, { url: '/api/comments', timeInterval: 2000 }), document.getElementById('recent-comments-react'));
  }
};