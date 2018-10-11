import React, { Component } from 'react';
import {getTurnData} from './utils';
import '../css/bootstrap.min.css';
import '../css/index.css';

/**
 * Author Quiz Component
 */
class AuthorQuiz extends Component {

  /**
   * Constructor Method
   */
  constructor() {
    super();
    const data = getTurnData();
    this.state = {
      books: data.books,
      author: data.author,
      highlight: ''
    };
    this.onAnswerSelected = this.onAnswerSelected.bind(this);
    this.onContinue = this.onContinue.bind(this);
  }

  /**
   * Event Handler of the title selection.
   * @param {object} event
   */
  onAnswerSelected(event) {
    const answer = event.target.id;
    const isCorrect = this.state.author.books.some((book) => book === answer);
    this.setState({
      highlight: isCorrect ? 'correct' : 'wrong'
    });
  }

  onContinue() {
    const data = getTurnData();
    this.setState({
        books: data.books,
        author: data.author,
        highlight: ''
    });
  }

  render() {
    return(
      <div className="container AuthorQuiz">
        <Header />
        <AuthorTitles
          books = {this.state.books}
          author = {this.state.author}
          onAnswerSelected = {this.onAnswerSelected}
          highlight = {this.state.highlight}
          onContinue = {this.onContinue}
        />
        <Footer />
      </div>
    )
  }
}

/**
 * Continue button to reset author and titiles.
 * @param {object} props
 */
function Continue(props) {
  return (
    <div className="row continue v-offset-10">
    { props.show
      ? <div className="col-12">
          <button className="btn btn-primary btn-sm float-center" onClick={props.onContinue}>Continue</button>
        </div>
      : null }
    </div>
  );
}

/**
 * Author and Titles Component
 * @param {object} props
 */
function AuthorTitles(props) {

  const show = props.highlight === 'correct';
  return (
    <div className="row">
      <div className="col-md-4">
        <AuthorImage author = {props.author} />
      </div>
      <div className="col-md-8">
        {
          props.books.map((title) =>
              <Title
                title={title}
                key={title}
                onAnswerSelected={props.onAnswerSelected}
                highlight={props.highlight}/>
          )
        }

        <Continue
          show = {show}
          onContinue = {props.onContinue}/>
      </div>
    </div>
  )
}

/**
 * Individual Title Component.
 * @param {object} props
 */
function Title(props) {

  /**
   * Maps the value of the highlight to the value
   * of the style
   * @param {string} highlight
   */
  function highlightToBgColor(highlight) {
    const mapping = {
      'none': 'list-group-item-light',
      'correct': 'list-group-item-success',
      'wrong': 'list-group-item-danger'
    };
    return mapping[highlight];
  }

  // Default class name value for list group
  let classNameValue = "list-group-item list-group-item-action ";
  classNameValue += highlightToBgColor(props.highlight);

  return (
    <h4
      className={classNameValue}
      onClick={props.onAnswerSelected}
      id={props.title} >
      {props.title}
    </h4>
  )
}

/**
 * Author Image Component
 * @param {object} props
 */
function AuthorImage(props) {
  return (
    <img src={props.author.imageUrl} className="authorimage" alt="Author"/>
  )
}

/**
 * Author Quiz Header Component
 * @param {object} props
 */
function Header(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="jumbotron">
          <h1 className="display-4">Author Quiz</h1>
          <p>Select the book written by the author shown</p>
        </div>
      </div>
    </div>
  )
}

/**
 * Author Quiz Footer Component
 * @param {object} props
 */
function Footer(props) {
  return (
      <div className="row v-offset-10">
        <div className="col-md-12">
          <footer>
            <p className="text-muted credit">
              All images are from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikemedia Commons</a>
              and are in the public domain.
            </p>
          </footer>
        </div>
      </div>
  )
}

export default AuthorQuiz;
