Drupal.behaviors.drupal_block_reactive = {
  attach: (context) => {

    // CommentBox component definition.
    class CommentBox extends React.Component{
      render() {
        return (
          <div className="commentBox">
            <CommentList />
          </div>
        );
      }
    }

    // CommentList component definition.
    class CommentList extends React.Component {
      render() {
        this.comments = [{title: 'one', date: Date(), key:1}];

        // List of comments to render.
        const commentNodes = this.comments.map((comment) => {
          return (
            <Comment title={comment.title} key={comment.key}>
              {comment.title}
            </Comment>
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
            <span className="commentTitle">ph title</span>
            <span className="commentDate">ph date</span>
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