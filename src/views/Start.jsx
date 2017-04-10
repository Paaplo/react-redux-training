import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormGroup, ControlLabel, FormControl, Button , Col} from 'react-bootstrap';

import * as memoryActions from '../actions/memoryActions';

/* 
TODO: on button click action startGame()
TODO: form input name to internal state
*/

class Start extends Component {
	constructor(props){
		super(props);
	}
	nameChange(e){

	}
	render() {
		return (
			<div className="">
				<Col xs={4} xsOffset={4}>
					<FormGroup className="center-block">
						<ControlLabel>Nimi</ControlLabel>
						<FormControl 
							type="text" 
						/>
						<Button 
							bsStyle="primary" 
							bsSize="large"
							className="center-block"
							style={{marginTop: '10px'}}
						>Aloita</Button>
					</FormGroup>
				</Col>
			</div>
		);
	}
}


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(memoryActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Start);
