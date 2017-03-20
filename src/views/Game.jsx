import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import memoryActions from '../actions/memoryActions';

class Game extends Component {
	render() {
		return (
			<div>
				
			</div>
		);
	}
}


const mapStateToProps = (state) => ({
    memory : state.memory
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(memoryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
