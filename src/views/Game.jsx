import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as memoryActions from '../actions/memoryActions';

import Card from './Card';
import './styles/board.css';

class Game extends Component {
	cardSelected(card){
		const memory = this.props.memory;
		if( (memory.guess1 && memory.guess1.id === card.id)
			|| (memory.guess2 && memory.guess2.id === card.id)){
			//do nothing
		}
		else if(!memory.guess1 || !memory.guess2 ){
			this.props.actions.flipCard(card);
			if(memory.guess1.id === card.rel){
				this.props.actions.matchFound(card, memory.guess1);
			}
			else {
				this.props.actions.clearSelections();
			}			
		}

	}
	renderCards(){
		let memory = this.props.memory;
		if(memory && memory.cards.length){
			return memory.cards.map((card, index)=>{
        	return ( 
        		<Card 
	        		card={card} 
	        		key={index} 
	        		cardSelected={this.cardSelected.bind(this)}
	        	/> )
			})
		}
		else{
			return <div/>
		}
	}
	render() {
		return (
			<div>
				<div className="title">
	        {this.props.memory.rounds}				
				</div>
				<div className="cards">
	        {this.renderCards()}				
				</div>
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
