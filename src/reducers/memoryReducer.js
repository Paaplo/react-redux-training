import { 
	FLIP_CARD, 
	RESTART_GAME, 
	SHOW_HIGH_SCORES, 
	START_GAME,
	GET_CARDS_FULFILLED,
	CLEAR_SELECTIONS,
	MATCH_FOUND,
  ALL_FOUND
} from '../constants/';


const initialState = {
  rounds: 0,
  guess1: null,
  guess2: null,
  cards: [],
  board: 'start',
  title: 'Anna nimi',
  name: '',
  results: []
};

export default function memory(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS_FULFILLED:
      return Object.assign({}, state, {
        cards: action.payload,
        guess1: null,
        guess2: null,
        rounds: 0
      });
    case SHOW_HIGH_SCORES:
      return Object.assign({}, state, {
        board: 'highscore',
        title: 'Parhaat tulokset'
      });
    /*  
    TODO: case START_GAME (board, name, title)
    */

    /*
    TODO: case FLIP_CARD:
      cards: map current state cards and return {selected: true} if payload.id = card.id
      guess1: if guess1 exists do nothing. if not save payload as guess1
      guess2: if guess1 exists and no guess2 save. otherwise null
    */

    /* 
    TODO: case CLEAR_SELECTIONS:
      clear guesses
      increare rounds
      cards: map cards and return {selected: false} if not found
    */
    /*
    TODO: case MATCH_FOUND:
      clear guesses
      increase rounds
      cards: map cards if payload.id1 or payload.id2 matches set {found: true}
    */
    case RESTART_GAME:
      return Object.assign({}, state, {
        rounds: 0,
        guess1: null,
        guess2: null,
        cards: [],
        title: 'Anna nimi',
        board: 'start'
      });
    case ALL_FOUND:
      return Object.assign({}, state, {
        board: 'highscore',
        title: 'Parhaat tulokset',
        results: state.results.concat({name: state.name, result: state.rounds})
      })
    default:
      return state;
  }
}