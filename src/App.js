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
  componentDidMount(){
    this.props.actions.getCards();
  }
  render() {
    return (
      <div className="App">
        <Title 
          title={this.props.memory.title}
          rounds={this.props.memory.rounds}
        />
        <div className="board">
        {(() => {
            switch (this.props.memory.board) {
              case "game":
                  return <Game />;

              case "high-scores":
                  return <HighScore />;

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
