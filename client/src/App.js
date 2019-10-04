import React from 'react';
import './App.css';

import axios from 'axios';
import PlayerCard from './components/PlayerCard';

class App extends React.Component {
  constructor() { 
    super();
  this.state = {
    players: [],
  };  
}


  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({
          players: res.data
        })
      })
      .catch(err => alert(err));
  }

  render() {
    return (
      <div className="App">
     {this.state.players.map(player => {
       return (
        <PlayerCard name={player.name} country={player.country} searches={player.searches} />
  
       )
     })} 
</div>
    );
  }
} 
 

export default App;