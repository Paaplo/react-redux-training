import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as memoryActions from '../actions/memoryActions';

class Start extends Component {
	constructor(props){
		super(props);
		this.state = {name: ''}
	}
	nameChange(e){
		this.setState({name: e.target.value})
	}
	render() {
		return (
			<div className="board">
				<input type="text" onChange={(e)=> this.nameChange(e)}/>
				<button onClick={()=>this.props.actions.startGame(this.state.name)}>Aloita</button>
			</div>
		);
	}
}


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(memoryActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Start);
