import React from "react";
import "./App.css";

import axios from "axios";
import PlayerCard from "./components/PlayerCard";
import Navbar from "./components/Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`).then(res => {
      this.setState({
        players: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <h2 data-testid="card-header" className="soccer-card">
          {" "}
          Women's Soccer Data{" "}
        </h2>
        <div className='card-container'>
        {this.state.players.map(player => {
          return (
            <PlayerCard
              name={player.name}
              country={player.country}
              searches={player.searches}
            />
          );
        })}
        </div>
      </div>
    );
  }
}

export default App;
