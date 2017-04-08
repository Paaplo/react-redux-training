function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}
module.exports = createConstants(
	'FLIP_CARD',
	'RESTART_GAME',
	'SHOW_HIGH_SCORES',
	'START_GAME',
	'GET_CARDS',
	'GET_CARDS_FULFILLED',
	'GET_CARDS_PENDING',
	"NO_MATCH",
	"CLEAR_SELECTIONS",
	"MATCH_FOUND",
	"CLEAR_SELECTIONS_PENDING"
)
