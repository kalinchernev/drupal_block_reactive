Drupal.behaviors.drupal_block_reactive = {
  attach: (context) => {

    // CommentBox component definition.
    class CommentBox extends React.Component{
      render() {
        const comments = [
          {title: 'one', date: Date(), key:1},
          {title: 'two', date: Date(), key:2}
        ];
        return (
          <div className="commentBox">
            <CommentList comments={comments} />
          </div>
        );
      }
    }

    // CommentList component definition.
    class CommentList extends React.Component {
      render() {
        // List of comments to render.
        const commentNodes = this.props.comments.map((comment) => {
          return (
            <Comment title={comment.title} date={comment.date} key={comment.key} />
          );
        });
        return (
          <div className="commentList">
            {commentNodes}
          </div>
        );
      }
    }

    // Comment component definition.
    class Comment extends React.Component {
      render() {
        return (
          <div className="comment">
            <span className="commentTitle">{this.props.title}</span>
            <span className="commentDate">{this.props.date}</span>
          </div>
        );
      }
    }

    // Render our component.
    ReactDOM.render(
      <CommentBox />,
      document.getElementById('recent-comments-react')
    );

  }
};