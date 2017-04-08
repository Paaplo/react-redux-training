import { 
	FLIP_CARD, 
	RESTART_GAME, 
	SHOW_HIGH_SCORES, 
	START_GAME,
	GET_CARDS_FULFILLED,
	CLEAR_SELECTIONS,
	MATCH_FOUND
} from '../constants/';


const initialState = {
  rounds: 1,
  guess1: {},
  guess2: {},
  cards: [],
  board: 'start',
  title: 'Aloita',
  name: '',
  results: []
};

export default function memory(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS_FULFILLED:
      return Object.assign({}, state, {
        cards: action.payload,
        guess1: {},
        guess2: {},
        rounds: 1
      });
    case SHOW_HIGH_SCORES:
      return Object.assign({}, state, {
        board: 'high_scores',
        title: 'Parhaat tulokset'
      });
    case START_GAME:
      return Object.assign({}, state, {
      	rounds: 1,
        board: 'game',
        title: 'Peli',
        name: action.payload.name
      });
    case FLIP_CARD:
      return Object.assign({}, state, {
        cards: state.cards.map((card) => {
                    return card.id === action.payload.id ?
                    Object.assign({}, card, { selected : true }) :
                    Object.assign({}, card);
                }),
        guess1: state.guess1 ? state.guess1 : action.payload,
        guess2: state.guess1 && !state.guess2 ? action.payload : null
      });
    case CLEAR_SELECTIONS:
      return Object.assign({}, state, {
        guess1: {},
        guess2: {},
        rounds: state.rounds+1,
        cards: state.cards.map((card) => {
                    return !card.found ?
                    Object.assign({}, card, { selected : false }) :
                    Object.assign({}, card);
                })
      });
    case MATCH_FOUND:
      return Object.assign({}, state, {
        guess1: {},
        guess2: {},
        rounds: state.rounds+1,
        cards: state.cards.map((card) => {
                    return action.payload.id1 === card.id || action.payload.id2 === card.id ?
                    Object.assign({}, card, { found : true }) :
                    Object.assign({}, card);
                })
      });
    case RESTART_GAME:
      return Object.assign({}, state, {
        rounds: 1,
        guess1: {},
        guess2: {},
        cards: action.payload,
        board: 'game'
      });
    default:
      return state;
  }
}