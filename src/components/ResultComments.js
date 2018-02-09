import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

//data
import comments from '../data/comments';

export default class ResultComments extends Component {
  
  static propTypes = {
    comments: PropTypes.array.isRequired,
    helpers: PropTypes.object.isRequired,
    addComment: PropTypes.func.isRequired,
    removeComment: PropTypes.func.isRequired,
    toggleProperty: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.nestingPixels = 0; //used for nesting replied comments
  }

  onCommentSubmitForm = event => {
    event.preventDefault();
    
    const name = this.refs.name.value;
    const text = this.refs.text.value;
    const { commentForm } = this.refs;

    if(name.length === 0 && text.length === 0) {
      alert("Please fill the name and comment section");
      return;
    }
    
    this.props.addComment(name, text);
    this.props.toggleProperty( "isDisplayingCommentForm" );
    commentForm.reset();
  }
    
  renderCommentsComponent = (comment, index) => {
    const renderRepliedComments = () => {
      const { replys } = comment;

      if(replys) {
        this.nestingPixels += 30;
        return replys.map(this.renderCommentsComponent);
      } else {
        this.nestingPixels = 0; //reset nested pixel
        return;
      } 
    }
    
    return (
      <Fragment key={index}>
        <div style={ {marginLeft: `${this.nestingPixels}px`} } className="comment" onClick={ () => this.props.removeComment( index ) }>
          <strong>{comment.name}</strong>
          <p>{comment.text}</p>
          <div className="comment-btns">
            <button className="x-btn">&times;</button>
            <button className="round-btn">reply</button>
          </div>
        </div>
        {}
        {renderRepliedComments()}
      </Fragment>
    )
  }
  
  render() {
    const { comments, helpers } = this.props;
    const displayCommentForm = helpers.isDisplayingCommentForm 
    ?
    <form ref="commentForm" className="comment-form" onSubmit={ this.onCommentSubmitForm }>
      <fieldset>
        <button className="x-btn close" onClick={ () => this.props.toggleProperty( "isDisplayingCommentForm" ) }>&times;</button>
        <label htmlFor="name">Name:</label>
        <input ref="name" id="name" className="input" type="text" placeholder="Your name please"/>
      </fieldset>
      <fieldset>
        <label htmlFor="comment">Comment:</label>
        <textarea ref="text" id="comment" className="input comment" placeholder="Tell us your story... or just leave a comment 😃"></textarea>
      </fieldset>
      <button type="submit" className="round-btn">submit</button>
    </form> 
    :
    <button className="box-btn" onClick={ () => this.props.toggleProperty( "isDisplayingCommentForm" ) }>leave a comment...</button>



    return (
      <div className="result-comments">
        <h6>Tell us your story:</h6>
        {displayCommentForm}
        {comments.map(this.renderCommentsComponent)}
      </div>
    );
  }
}