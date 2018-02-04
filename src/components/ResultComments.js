import React, { Component, Fragment } from 'react';

//data
import comments from '../data/comments';

export default class ResultComments extends Component {
  
  constructor(props) {
    super(props);
    this.nestingPixel = 0; //used for nesting replied comments
  }

  state = {
    comments,
    isDisplayingCommentForm: false,
  }

  toggleCommentForm = () => {
    const { isDisplayingCommentForm } = this.state;
    this.setState({
      isDisplayingCommentForm: !isDisplayingCommentForm,
    })
  }
    
  renderCommentsComponent = (comment, index) => {

    const renderRepliedComments = () => {
      const { replys } = comment;

      if(replys) {
        this.nestingPixel += 30;
        return replys.map(this.renderCommentsComponent);
      } else {
        this.nestingPixel = 0; //reset nested pixel
        return null;
      } 
    }
    
    return (
      <Fragment key={index}>
        <div style={ {marginLeft: `${this.nestingPixel}px`} } className="comment">
          <strong>{comment.user}</strong>
          <p>{comment.text}</p>
          <div className="comment-btns">
            <button className="x-btn">&times;</button>
            <button className="round-btn">reply</button>
          </div>
        </div>
        {renderRepliedComments()}
      </Fragment>
    )
  }
  
  render() {
    const { comments, isDisplayingCommentForm } = this.state;
    const displayCommentForm = isDisplayingCommentForm 
    ?
    <form className="comment-form">
      <fieldset>
        <button className="x-btn close" onClick={ () => this.toggleCommentForm() }>&times;</button>
        <label htmlFor="name">Name:</label>
        <input id="name" className="input" type="text" placeholder="Your name please"/>
      </fieldset>
      <fieldset>
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" className="input comment" placeholder="Tell us your story... or just leave a comment 😃"></textarea>
      </fieldset>
      <button type="submit" className="round-btn">submit</button>
    </form> 
    :
    <button className="box-btn" onClick={ () => this.toggleCommentForm() }>leave a comment...</button>



    return (
      <div className="result-comments">
        <h6>Tell us your story:</h6>
        {displayCommentForm}
        {comments.map(this.renderCommentsComponent)}
      </div>
    );
  }
}