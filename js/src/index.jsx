Drupal.behaviors.drupal_block_reactive = {
  attach: (context) => {

    // CommentBox component definition.
    const CommentBox = React.createClass({
      render: () => {
        return (
          <div className="commentBox">
            <p>Drupal behaviors dependency.</p>
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