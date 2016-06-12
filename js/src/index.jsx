Drupal.behaviors.drupal_block_reactive = {
  attach: (context) => {

    // CommentBox component definition.
    const CommentBox = React.createClass({
      getInitialState: () => {
        return {data: []};
      },
      render: () => {
        return (
          <div className="commentBox">
            <CommentList />
          </div>
        );
      }
    });

    // CommentList component definition.
    const CommentList = React.createClass({
      render: () => {
        const tempComments = [
          {
            title: 'INTT-1',
            date: Date(),
            key: 1
          },
          {
            title: 'INTT-2',
            date: Date(),
            key: 2
          }
        ];

        // List of comments to render.
        const commentNodes = tempComments.map((comment) => {
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
    });

    // Comment component definition.
    const Comment = React.createClass({
      render: () => {
        return (
          <div className="comment">
            <span className="commentTitle">title placeholder</span>
            <span className="commentDate">date placeholder</span>
          </div>
        );
      }
    });

    // Render our component.
    ReactDOM.render(
      <CommentBox />,
      document.getElementById('recent-comments-react')
    );

  }
};