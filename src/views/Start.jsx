import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormGroup, ControlLabel, FormControl, Button , Col} from 'react-bootstrap';

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
			<div className="">
				<Col xs={4} xsOffset={4}>
					<FormGroup className="center-block">
						<ControlLabel>Nimi</ControlLabel>
						<FormControl 
							type="text" 
							onChange={(e)=> this.nameChange(e)}/>
						<Button bsStyle="primary" 
								bsSize="large"
								className="center-block"
								style={{marginTop: '10px'}}
								onClick={()=>this.props.actions.startGame(this.state.name)}>Aloita</Button>
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
