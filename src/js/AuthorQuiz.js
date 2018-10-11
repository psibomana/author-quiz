import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/index.css';

/**
 * Author Quiz Component
 */
class AuthorQuiz extends Component {

  /**
   * Constructor Method
   */
  constructor(props) {
    super(props);
    this.state = {
      books: props.books,
      author: props.author
    };
  }

  render() {
    return(
      <div className="container AuthorQuiz">
        <Header />
        <AuthorTitles
          books = {this.state.books}
          author = {this.state.author}
        />
        <Footer />
      </div>
    )
  }
}

/**
 * Author and Titles Component
 * @param {object} props
 */
function AuthorTitles(props) {
  return (
    <div className="row">
      <div className="col-md-4">
        <AuthorImage author = {props.author} />
      </div>
      <div className="col-md-8">
        {props.books.map((title) => <Title title={title} key={title}  />)}
      </div>
    </div>
  )
}


/**
 * Individual Title Component.
 * @param {object} props
 */
function Title(props) {
  return (
    <h4 className="list-group-item list-group-item-action list-group-item-light">{props.title}</h4>
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
              All images are from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikemedia Commons</a> and are in the public domain
            </p>
          </footer>
        </div>
      </div>
  )
}

export default AuthorQuiz;
