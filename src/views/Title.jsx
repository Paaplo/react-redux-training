import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Title extends Component {
	render() {
		return (
			<div className="title">
				<div className="title-item">
					<Button 
						bsStyle="primary" 
						bsSize="large"
						onClick={()=>this.props.restart()}
					>
						Aloita alusta
					</Button>
				</div>
				<div className="title-item">
					<div>{this.props.title}</div>
					<div>{this.props.rounds}</div>

				</div>
				<div className="title-item">
					<Button bsStyle="primary" bsSize="large">
						Näytä tulokset
					</Button>
				</div>
			</div>
		);
	}
}

Title.propTypes = {
  title: React.PropTypes.string
};