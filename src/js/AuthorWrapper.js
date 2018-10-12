import React, { Component } from 'react';
import Form from "react-jsonschema-form";
import {authorSchema, authors, addAuthorTitle} from './utils';
import '../css/bootstrap.min.css';
import '../css/index.css';

/**
 * Author Wrapper Component
 */
class AuthorWrapper extends Component {

  constructor() {
    super();
    this.onAddAuthor = this.onAddAuthor.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onCancel() {
    this.props.history.push('/');
  }

  /**
   * Add author handler
   * @param {object} formData Data from the form
   */
  onAddAuthor(formData) {

    const author = {
      name: formData.formData.author,
      imageUrl: formData.formData.imageUrl,
      imageSource: "Wikimedia Commons",
      books: [formData.formData.bookTemp]
    }

    // Add author title
    addAuthorTitle(authors, author);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container AuthorQuiz">
        <Header />
        <div className="col-md-6 offset-md-3">
          <Form schema={authorSchema}
                noHtml5Validate
                onSubmit={this.onAddAuthor}
                showErrorList={false}>
            <div className="col-md-6 btn-toolbar offset-md-4">
              <div className="btn-group mr-2">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              <div className="btn-group mr-2">
                <button type="cancel" onClick={this.onCancel} className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    )
  }
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
          <p>Add an Author Book</p>
        </div>
      </div>
    </div>
  )
}

export default AuthorWrapper;
