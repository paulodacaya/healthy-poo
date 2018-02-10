import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

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
    this.id = 9;
    this.nestedMargin = 0; //used to margin-left nested comments
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
    
    this.props.addComment( name, text, this.id );
    this.id++; //increment unique id
    this.props.toggleProperty( "isDisplayingCommentForm" );
    commentForm.reset();
  }

  getTotalComments = comments => {
    let counter = 0;
    
    const iterate = comment => {
      const { children } = comment;
      counter++;

      if(children) {
        children.forEach( iterate );
      }
    }

    comments.forEach( iterate );
    return counter;
  }
    
  renderComments = (comment, index) => {
    const renderNestedComments = () => {
      const { children } = comment;

      if(children) {
        this.nestedMargin += 30;
        return children.map(this.renderComments);
      } else {
        this.nestedMargin = 0; //reset nested pixel
        return;
      } 
    }
    
    return (
      <Fragment key={index}>
        <div style={ {marginLeft: `${this.nestedMargin}px`} } className="comment">
          <div>
            <strong>{comment.name}</strong>
            <p>{comment.text}</p>
            <button className="x-btn" onClick={ () => this.props.removeComment( comment.id ) }>&times;</button>
          </div>
          <button className="round-btn" onClick={ () => console.log( comment.id ) } >reply</button>
        </div>
        {renderNestedComments()}
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
        <div className="result-comments-flex">
          <h6>Tell us your story:</h6>
          <h6>({this.getTotalComments( comments )} comments)</h6>
        </div>
        {displayCommentForm}
        {comments.map(this.renderComments)}
      </div>
    );
  }
}