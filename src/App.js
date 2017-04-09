import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './App.css';

import Game from './views/Game'
import HighScore from './views/HighScore'
import Start from './views/Start'
import Title from './views/Title'

import * as memoryActions from './actions/memoryActions';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Title 
          title={this.props.memory.title}
          rounds={this.props.memory.rounds}
          restart={this.props.actions.restart}
          board={this.props.memory.board}
          showHighScores={this.props.actions.showHighScores}
        />
        <div className="board">
        {(() => {
            switch (this.props.memory.board) {
              case "game":
                  return <Game />;

              case "highscore":
                  return <HighScore 
                          results={this.props.memory.results}
                          />;

              case "start":
              default:
                  return <Start />;
            }
          })()
        }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(memoryActions, dispatch)
});

const mapStateToProps = (state) => ({
    memory : state.memory
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
