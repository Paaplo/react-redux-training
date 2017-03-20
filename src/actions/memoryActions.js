import { FLIP_CARD, RESTART_GAME } from '../constants/';

export default {

    flipCard : (id) => ({
        type : FLIP_CARD,
        id
    }),

    restart : () => ({
        type : RESTART_GAME
    })

}