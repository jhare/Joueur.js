// Player: A player in this game. Every AI controls one player.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A player in this game. Every AI controls one player.
 * @extends GameObject
 */
class Player extends GameObject {
  /**
   * initializes a Player with basic logic as provided by the Creer code generator
   *
   * @memberof Player
   * @private
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.cat = null;
    this.clientType = '';
    this.food = 0;
    this.lost = false;
    this.name = '';
    this.opponent = null;
    this.reasonLost = '';
    this.reasonWon = '';
    this.structures = [];
    this.timeRemaining = 0;
    this.units = [];
    this.upkeep = 0;
    this.won = false;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The overlord cat Unit owned by this Player.
   *
   * @type {Unit}
   */
  get cat() {
    return client.gameManager.getMemberValue(this, 'cat');
  }

  set cat(value) {
    client.gameManager.setMemberValue(this, 'cat', value);
  }


  /**
   * What type of client this is, e.g. 'Python', 'JavaScript', or some other language. For potential data mining purposes.
   *
   * @type {string}
   */
  get clientType() {
    return client.gameManager.getMemberValue(this, 'clientType');
  }

  set clientType(value) {
    client.gameManager.setMemberValue(this, 'clientType', value);
  }


  /**
   * The amount of food owned by this player.
   *
   * @type {number}
   */
  get food() {
    return client.gameManager.getMemberValue(this, 'food');
  }

  set food(value) {
    client.gameManager.setMemberValue(this, 'food', value);
  }


  /**
   * If the player lost the game or not.
   *
   * @type {boolean}
   */
  get lost() {
    return client.gameManager.getMemberValue(this, 'lost');
  }

  set lost(value) {
    client.gameManager.setMemberValue(this, 'lost', value);
  }


  /**
   * The name of the player.
   *
   * @type {string}
   */
  get name() {
    return client.gameManager.getMemberValue(this, 'name');
  }

  set name(value) {
    client.gameManager.setMemberValue(this, 'name', value);
  }


  /**
   * This player's opponent in the game.
   *
   * @type {Player}
   */
  get opponent() {
    return client.gameManager.getMemberValue(this, 'opponent');
  }

  set opponent(value) {
    client.gameManager.setMemberValue(this, 'opponent', value);
  }


  /**
   * The reason why the player lost the game.
   *
   * @type {string}
   */
  get reasonLost() {
    return client.gameManager.getMemberValue(this, 'reasonLost');
  }

  set reasonLost(value) {
    client.gameManager.setMemberValue(this, 'reasonLost', value);
  }


  /**
   * The reason why the player won the game.
   *
   * @type {string}
   */
  get reasonWon() {
    return client.gameManager.getMemberValue(this, 'reasonWon');
  }

  set reasonWon(value) {
    client.gameManager.setMemberValue(this, 'reasonWon', value);
  }


  /**
   * Every Structure owned by this Player.
   *
   * @type {Array.<Structure>}
   */
  get structures() {
    return client.gameManager.getMemberValue(this, 'structures');
  }

  set structures(value) {
    client.gameManager.setMemberValue(this, 'structures', value);
  }


  /**
   * The amount of time (in ns) remaining for this AI to send commands.
   *
   * @type {number}
   */
  get timeRemaining() {
    return client.gameManager.getMemberValue(this, 'timeRemaining');
  }

  set timeRemaining(value) {
    client.gameManager.setMemberValue(this, 'timeRemaining', value);
  }


  /**
   * Every Unit owned by this Player.
   *
   * @type {Array.<Unit>}
   */
  get units() {
    return client.gameManager.getMemberValue(this, 'units');
  }

  set units(value) {
    client.gameManager.setMemberValue(this, 'units', value);
  }


  /**
   * The total upkeep of every Unit owned by this Player. If there isn't enough food for every Unit, all Units become starved and do not consume food.
   *
   * @type {number}
   */
  get upkeep() {
    return client.gameManager.getMemberValue(this, 'upkeep');
  }

  set upkeep(value) {
    client.gameManager.setMemberValue(this, 'upkeep', value);
  }


  /**
   * If the player won the game or not.
   *
   * @type {boolean}
   */
  get won() {
    return client.gameManager.getMemberValue(this, 'won');
  }

  set won(value) {
    client.gameManager.setMemberValue(this, 'won', value);
  }



  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Player;
