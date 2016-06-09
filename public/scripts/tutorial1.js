var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      <h1> Comments </h1>
        <CommentList />
        <hr/>
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
        <div className="commentList">
          <Comment author="Me">React is kinda fun!</Comment>
          <Comment author="Me">Not used to having to type semicolons... +1 for CoffeeScript</Comment>
        </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return(
        <div className="commentForm">
          Hello, world! I am a CommentForm.
        </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
        <div className="comment">
          <h4 className="commentAuthor">
          {this.props.author}
          </h4>
          {this.props.children}
        </div>
    );
  }
})
// all class creations have to be before rendering
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

