import React from 'react';
import '../css/bootstrap.min.css';

class AuthorForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          imageUrl: '',
          books: [],
          bookTemp: ''
      };
      this.onFieldChange = this.onFieldChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleAddBook = this.handleAddBook.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddAuthor(this.state);
  }

  onFieldChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  handleAddBook(event) {
    this.setState({
        books: this.state.books.concat([this.state.bookTemp]),
        bookTemp: ''
    });
  }

  render() {
      return (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onFieldChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" className="form-control" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="bookTemp">Books</label>
                    {this.state.books.map((book) => <p key={book}>{book}</p>)}
                    <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange} />
                    <input type="button" value="+" onClick={this.handleAddBook} />
                </div>
                <button type="submit" className="btn-sm btn-primary">Submit</button>
                <input type="submit" value="Add"/>
            </form>
          </div>
        </div>
      )
  }
}


export default AuthorForm;
