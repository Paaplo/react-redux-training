import { 
	FLIP_CARD, 
	RESTART_GAME, 
	START_GAME, 
	GET_CARDS, 
	CLEAR_SELECTIONS, 
	MATCH_FOUND
} from '../constants/';

import { generateCards } from '../utils/helpers';

export function flipCard(card) {
  return {
    type: FLIP_CARD,
    payload: card
  };
}
export function restart() {
  return {
    type: RESTART_GAME
  };
}

export function startGame(name) {
	return {
		type: START_GAME,
		payload: {name}
	}
}

export function getCards() {
	 return dispatch => {
		return dispatch({
			type: GET_CARDS,
			payload: generateCards()
		})
	}
}

export function clearSelections() {
	return (dispatch) => {
			setTimeout (()=> {
				dispatch({
					type: CLEAR_SELECTIONS
				})
			}, 1500);
		}
}

export function matchFound(card1, card2) {
	return {
		type: MATCH_FOUND,
		payload: {id1: card1.id, id2: card2.id}
	}
}