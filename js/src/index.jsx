Drupal.behaviors.drupal_block_reactive = {
  attach: (context) => {
    // CommentBox component definition.
    class CommentBox extends React.Component {
      render() {
        const commentsList = [
          {title: "one", date: Date(), id: '223'},
          {title: "two", date: Date(), id: '224'}
        ];
        const comments = commentsList.map((comment) => {
          return <Comment title={comment.title} date={comment.date} key={comment.id}/>
        });

        return (
          <div className="comments">{comments}</div>
        );
      }
    }

    // Comment component definition.
    class Comment extends React.Component {
      render() {
        return (
          <div className="comment">
            <span>{this.props.title}</span> | <span>{this.props.date}</span>
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