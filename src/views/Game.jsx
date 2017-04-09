import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as memoryActions from '../actions/memoryActions';

import Card from './Card';
import './styles/cards.css';

class Game extends Component {
	componentDidMount() {
		this.props.actions.getCards();
	}
	cardSelected(card){
		const memory = this.props.memory;
		// Logiikka: 
		// 1. jos painetaan samaa korttia kuin on jo arvattu älä tee mitään
		// 2. jos on jo 2 arvausta älä tee mitään
		// 3. jos 1. tai 2. arvaus puuttuu etene
		// 3.1  flippaa kortti
		// 3.2  tarkista onko matchi ensimmäisen arvauksen kanssa
		// 3.3  jos ei ole ja arvaus 1 on tallessa tyhjennä arvaukset

		if( (memory.guess1 && memory.guess1.id === card.id)
			|| (memory.guess2 && memory.guess2.id === card.id)){
			//do nothing
		}
		else if(!memory.guess1 || !memory.guess2 ){
			this.props.actions.flipCard(card);
			if(memory.guess1 && memory.guess1.id === card.rel){
				this.props.actions.matchFound(card, memory.guess1, memory.cards);
			}
			else if(memory.guess1){
				this.props.actions.clearSelections();
			}		
		}
	}
	renderCards(){
		const memory = this.props.memory;
		if(memory && memory.cards.length){
			return memory.cards.map((card, index)=>{
				return ( 
					<Card 
						card={card} 
						key={index} 
						cardSelected={this.cardSelected.bind(this)}
					/> 
				)
			})
		}
		else{
			return <div/>
		}
	}
	render() {
		return (
			<div>
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
