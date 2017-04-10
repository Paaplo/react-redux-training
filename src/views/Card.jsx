import React, { Component } from 'react';
import './styles/card.css';
import './styles/spinner.css';

/* TODO: create component internal state for image loading spinner */

export default class Card extends Component {
	constructor(props){
		super(props);
	}
	handleImageLoaded(){
		
	}
	render() {
		const card = this.props.card;
	    
		let className = "";
		if (card.selected) {
		  className += " selected";
		}
		if (card.found) {
		  className += " found";
		}
	  return (
	  	<div className="card" onClick={(e)=>this.props.cardSelected(card)}>
	      <div className={'flipper '+className}>
	          <div className="front">
	          {/*<div className="spinner"></div>*/}
	          </div>
	          <img className="back" onLoad={this.handleImageLoaded.bind(this)} src={card.url} alt=""></img>
	      </div>
	     </div>
	  );
	}
}