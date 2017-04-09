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
    case START_GAME:
      return Object.assign({}, state, {
      	rounds: 0,
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
        guess1: null,
        guess2: null,
        rounds: state.rounds+1,
        cards: state.cards.map((card) => {
                    return !card.found ?
                    Object.assign({}, card, { selected : false }) :
                    Object.assign({}, card);
                })
      });
    case MATCH_FOUND:
      return Object.assign({}, state, {
        guess1: null,
        guess2: null,
        rounds: state.rounds+1,
        cards: state.cards.map((card) => {
                    return action.payload.id1 === card.id || action.payload.id2 === card.id ?
                    Object.assign({}, card, { found : true }) :
                    Object.assign({}, card);
                })
      });
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