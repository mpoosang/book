import React, { Component } from 'react';
import './App.css';
import Filters from './components/Filters'
import SearchForm from './components/SearchForm';
import BookResults from './components/BookResults';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      query: '',
      printType: 'all',
      bookType: 'no-filter',
      error: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  repos = () => {
    const baseURL = 'https://www.googleapis.com/books/v1/volumes?'
    const key = 'AIzaSyAqXk5k4ecZ-L3W6KAIw9-1o5BhQ2KpjlU';
    let printType = `printType=${this.state.printType}`;
    let filter = this.state.bookType !== 'no-filter' ? `filter=${this.state.bookType}` : '';
    let queryInput = `${this.state.query}`
    const newUrl = `${baseURL}q=${queryInput}&${filter}${printType}&key=${key}`;
    console.log(newUrl);

    fetch(newUrl)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        const bookResults = data.items.map(item => {
          let book = {}
          book.author = item.volumeInfo.authors
          book.title = item.volumeInfo.title
          book.description = item.volumeInfo.description
          book.price = !item.saleInfo.listPrice ? '' : item.saleInfo.listPrice.amount
          book.image = !item.volumeInfo.imageLinks ? '' : item.volumeInfo.imageLinks.thumbnail
          book.preview = item.volumeInfo.previewLink
          return book
      })
      this.setState({
        results: bookResults,
        error: null
      })
      console.log(this.state.results)
    })
    .catch(err => this.setState({error: err.message}))
  }

  handleSubmit = (event) => {
    console.log('Handle Submit Ran')
    this.repos();
  }

  handleChange = (query) => {
    console.log(query)
    this.setState({query})
  }

  handlePrintType = (printTypeEvent) => {
    if (printTypeEvent) {
      this.setState({
          printType: printTypeEvent
      });
    } 
  }

  handleBookType = (bookTypeEvent) => {
    if (bookTypeEvent) {
      this.setState({
          bookType: bookTypeEvent
      });
    } 
  }
  
  render() {
    <Filters 
      handlePrintType = {this.handlePrintType}
      handleBookType = {this.handleBookType}
    />

    return (
      <div className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <SearchForm
            handleSubmit={this.handleSubmit} handleChange={this.handleChange} query={this.state.query}
          />
          <BookResults results={this.state.results} />
        </main>
      </div>
    )
  }
}