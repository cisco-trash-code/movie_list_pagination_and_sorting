import React, { Component } from 'react';
import './App.css';
import { movie }  from './db/movieDB';
import List from './components/list';

class App extends Component {
  state = { 
    list : movie
   }
  render() { 
    return ( 
      <div className='container-fluid'>
        <div className='col-4'>
          <List onDelete={this.handleDelete} list={this.state.list}/>
        </div>
      </div>
     );
  }
  handleDelete = movieId => {
    const list = this.state.list.filter(movie => movie.id !== movieId);
    this.setState({ list })
  }
}
 
export default App;