import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as memoryActions from '../actions/memoryActions';

import './styles/cards.css';

class Game extends Component {
	componentDidMount() {
		this.props.actions.getCards();
	}
	cardSelected(card){
		const memory = this.props.memory;
		// TODO: 
		// game logic: 
		// 1. if card is guess1 or guess2 do nothing
		// 2. if both guesses are in redux state do nothing
		// 3. if either guess is not in redux store go forward
		// 3.1  action flipCard()
		// 3.2  if card.rel === guess1.id action matchFound()
		// 3.3  if not and guess1 exists action clearSelections()

		if( (memory.guess1 && memory.guess1.id === card.id)
			|| (memory.guess2 && memory.guess2.id === card.id)){
			//do nothing
		}

	}
	renderCards(){
		const memory = this.props.memory;
		if(memory && memory.cards.length){
			/* 
				TODO: 
				map memory.cards 
				return <Card 
					proprties: card index cardSelected() />
			*/
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
