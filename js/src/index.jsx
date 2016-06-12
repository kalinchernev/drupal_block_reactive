/**
 * @file
 * Attaching React component via Drupal behaviors..
 */

Drupal.behaviors.drupal_block_reactive = {
  attach: (context) => {
    // CommentBox component definition.
    class CommentBox extends React.Component {
      constructor() {
        super();
        this.state = {
          comments: []
        }
      }
      // Data from a service.
      _fetchData() {
        jQuery.ajax({
          url: this.props.url,
          dataType: 'json',
          success: (comments) => this.setState({comments}),
          error: (xhr, status, err) => {
            console.error(this.props.url, status, err.toString());
          }
        });
      }

      // Gets data from state, returns a list components.
      _getComments() {
        // Get the list of comments from the state.
        const commentsList = this.state.comments;
        // Return an array of sub-components.
        if (commentsList.length > 0) {
          return commentsList.map((comment) => {
            return <Comment
              subject={comment.subject}
              changed={comment.changed}
              key={comment.cid}
            />
          });
        }
        return (
          <p>{Drupal.t('No comments.')}</p>
        );
      }

      componentDidMount() {
        this._fetchData();
        setInterval(this._fetchData.bind(this), this.props.timeInterval);
      }

      render() {
        const commentsNodes = this._getComments();
        return (
          <div className="comments">
            {commentsNodes}
          </div>
        );
      }
    }

    // Comment component definition.
    class Comment extends React.Component {
      render() {
        return (
          <div className="comment">
            <span>{this.props.subject}</span> | <span>{this.props.changed}</span>
          </div>
        );
      }
    }
    // Render our component.
    ReactDOM.render(
      <CommentBox url='/api/comments' timeInterval={2000}/>,
      document.getElementById('recent-comments-react')
    );
  }
};
