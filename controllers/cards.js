const path = require('path');

const { readFile } = require('../helpers/index');

const CARDS_PATH = path.join(__dirname, '../data/cards.json');

const getCards = (req, res) => {
  readFile(CARDS_PATH)
    .then((cards) => res.send({ data: JSON.parse(cards)}))
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
};

module.exports = { getCards };