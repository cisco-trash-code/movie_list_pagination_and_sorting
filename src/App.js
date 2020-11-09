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
          <List list={this.state.list}/>
        </div>
      </div>
     );
  }
}
 
export default App;