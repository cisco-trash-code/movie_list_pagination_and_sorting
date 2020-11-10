import React, { Component } from 'react';
import './App.css';
import { movie }  from './db/movieDB';
import List from './components/list';
import Pagination from './components/pagination';

class App extends Component {
  state = { 
    list : movie,
    itemsForPage : 4,
    currentPage : 1
   }
  render() { 
    return ( 
      <div className='container-fluid'>
        <div className='col-4'>
          <List onDelete={this.handleDelete} list={this.state.list}/>
          <Pagination itemsForPage={this.state.itemsForPage} currentPage={this.state.currentPage} totalItems={this.state.list.length} onPressPag={this.handlePressPag}/>
        </div>
      </div>
     );
  }
  handlePressPag = page => {
    this.setState({ currentPage : page })
  }
  handleDelete = movieId => {
    const list = this.state.list.filter(movie => movie.id !== movieId);
    this.setState({ list })
  }
}
 
export default App;