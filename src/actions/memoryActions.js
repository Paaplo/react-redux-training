import { 
	FLIP_CARD, 
	RESTART_GAME, 
	START_GAME, 
	GET_CARDS, 
	CLEAR_SELECTIONS, 
	MATCH_FOUND,
	ALL_FOUND,
	SHOW_HIGH_SCORES
} from '../constants/';

import { generateCards } from '../utils/helpers';

/*
TODO: flipCard() action
	returns action type FLIP_CARD payload card object
*/

export function restart() {
  return {
    type: RESTART_GAME
  };
}

/* 
TODO: startGame() action
	returns action type START_GAME and payload name 
*/

export function getCards() {
	 return dispatch => {
		return dispatch({
			type: GET_CARDS,
			payload: generateCards()
		})
	}
}

/*
TODO: clearSelections() action
	create a delayd action with setTimeout
*/

export function matchFound(card1, card2, cards) {
	return dispatch => {
		if (allFound(cards)){
			dispatch({
				type: ALL_FOUND,
			})
		}
		else{
			dispatch({
				type: MATCH_FOUND,
				payload: {id1: card1.id, id2: card2.id}
			})			
		}
	}
}
export function showHighScores() {
	return {
		type: SHOW_HIGH_SCORES
	}
}


function allFound(cards) {
	let foundCards = 0;
	if(cards.length){
		for (let card of cards){
			if(card.found)
				foundCards++;
		}
	}
	if (foundCards === 14){
		return true;
	}
	else {
		return false;
	}
}
