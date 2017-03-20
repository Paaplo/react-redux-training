import { FLIP_CARD, RESTART_GAME } from '../constants/';
import { generateCards } from '../utils/helpers';

const initialState = {
    round : 1,
    guess1 : null,
    guess2 : null,
    cards : generateCards()
};

export default function memory(state = initialState, action) {
    switch (action.type) {

        case FLIP_CARD:
        	break;
        case RESTART_GAME :

            return {
                round : 1,
                guess1 : null,
                guess2 : null,
                cards : generateCards()
            };

        default:
            return state;
    }
}