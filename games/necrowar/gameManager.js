// DO NOT MODIFY THIS FILE

/**
 * Send hordes of the undead at your opponent while defending yourself against theirs to win.
 * @namespace Necrowar
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class NecrowarGameManager extends GameManager {}

NecrowarGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Player: require('./player'),
  Tile: require('./tile'),
  Tower: require('./tower'),
  Unit: require('./unit'),
  tJob: require('./tJob'),
  uJob: require('./uJob'),
};

module.exports = NecrowarGameManager;
