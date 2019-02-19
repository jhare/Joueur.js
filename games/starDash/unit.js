// Unit: A unit in the game. May be a corvette, missleboat, martyr, transport, miner.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A unit in the game. May be a corvette, missleboat, martyr, transport, miner.
 * @extends Stardash.GameObject
 * @memberof Stardash
 */
class Unit extends GameObject {
  /**
   * Initializes a Unit with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.acted = false;
    this.energy = 0;
    this.genarium = 0;
    this.isDashing = false;
    this.job = null;
    this.legendarium = 0;
    this.moves = 0;
    this.mythicite = 0;
    this.owner = null;
    this.protector = null;
    this.radius = 0;
    this.rarium = 0;
    this.x = 0;
    this.y = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * Whether or not this Unit has performed its action this turn.
   *
   * @type {boolean}
   */
  get acted() {
    return client.gameManager.getMemberValue(this, 'acted');
  }

  set acted(value) {
    client.gameManager.setMemberValue(this, 'acted', value);
  }


  /**
   * The remaining health of a unit.
   *
   * @type {number}
   */
  get energy() {
    return client.gameManager.getMemberValue(this, 'energy');
  }

  set energy(value) {
    client.gameManager.setMemberValue(this, 'energy', value);
  }


  /**
   * The amount of Generium ore carried by this unit. (0 to job carry capacity - other carried items).
   *
   * @type {number}
   */
  get genarium() {
    return client.gameManager.getMemberValue(this, 'genarium');
  }

  set genarium(value) {
    client.gameManager.setMemberValue(this, 'genarium', value);
  }


  /**
   * Tracks wheither or not the ship is dashing.
   *
   * @type {boolean}
   */
  get isDashing() {
    return client.gameManager.getMemberValue(this, 'isDashing');
  }

  set isDashing(value) {
    client.gameManager.setMemberValue(this, 'isDashing', value);
  }


  /**
   * The Job this Unit has.
   *
   * @type {Stardash.Job}
   */
  get job() {
    return client.gameManager.getMemberValue(this, 'job');
  }

  set job(value) {
    client.gameManager.setMemberValue(this, 'job', value);
  }


  /**
   * The amount of Legendarium ore carried by this unit. (0 to job carry capacity - other carried items).
   *
   * @type {number}
   */
  get legendarium() {
    return client.gameManager.getMemberValue(this, 'legendarium');
  }

  set legendarium(value) {
    client.gameManager.setMemberValue(this, 'legendarium', value);
  }


  /**
   * The distance this unit can still move.
   *
   * @type {number}
   */
  get moves() {
    return client.gameManager.getMemberValue(this, 'moves');
  }

  set moves(value) {
    client.gameManager.setMemberValue(this, 'moves', value);
  }


  /**
   * The amount of Mythicite carried by this unit. (0 to job carry capacity - other carried items).
   *
   * @type {number}
   */
  get mythicite() {
    return client.gameManager.getMemberValue(this, 'mythicite');
  }

  set mythicite(value) {
    client.gameManager.setMemberValue(this, 'mythicite', value);
  }


  /**
   * The Player that owns and can control this Unit.
   *
   * @type {Stardash.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The martyr ship that is currently shielding this ship if any.
   *
   * @type {Stardash.Unit}
   */
  get protector() {
    return client.gameManager.getMemberValue(this, 'protector');
  }

  set protector(value) {
    client.gameManager.setMemberValue(this, 'protector', value);
  }


  /**
   * The radius of the circle this unit occupies.
   *
   * @type {number}
   */
  get radius() {
    return client.gameManager.getMemberValue(this, 'radius');
  }

  set radius(value) {
    client.gameManager.setMemberValue(this, 'radius', value);
  }


  /**
   * The amount of Rarium carried by this unit. (0 to job carry capacity - other carried items).
   *
   * @type {number}
   */
  get rarium() {
    return client.gameManager.getMemberValue(this, 'rarium');
  }

  set rarium(value) {
    client.gameManager.setMemberValue(this, 'rarium', value);
  }


  /**
   * The x value this unit is on.
   *
   * @type {number}
   */
  get x() {
    return client.gameManager.getMemberValue(this, 'x');
  }

  set x(value) {
    client.gameManager.setMemberValue(this, 'x', value);
  }


  /**
   * The y value this unit is on.
   *
   * @type {number}
   */
  get y() {
    return client.gameManager.getMemberValue(this, 'y');
  }

  set y(value) {
    client.gameManager.setMemberValue(this, 'y', value);
  }



  /**
   * Attacks the specified unit.
   *
   * @param {Stardash.Unit} enemy - The Unit being attacked.
   * @returns {boolean} - True if successfully attacked, false otherwise.
   */
  attack(enemy) {
    return client.runOnServer(this, 'attack', {
      enemy: enemy,
    });
  }


  /**
   * allows a miner to mine a asteroid
   *
   * @param {Stardash.Body} body - The object to be mined.
   * @returns {boolean} - True if successfully acted, false otherwise.
   */
  mine(body) {
    return client.runOnServer(this, 'mine', {
      body: body,
    });
  }


  /**
   * Moves this Unit from its current location to the new location specified.
   *
   * @param {number} x - The x value of the destination's coordinates.
   * @param {number} y - The y value of the destination's coordinates.
   * @returns {boolean} - True if it moved, false otherwise.
   */
  move(x, y) {
    return client.runOnServer(this, 'move', {
      x: x,
      y: y,
    });
  }


  /**
   * tells you if your ship can be at that location.
   *
   * @param {number} x - The x position of the location you wish to check.
   * @param {number} y - The y position of the location you wish to check.
   * @returns {boolean} - True if pathable by this unit, false otherwise.
   */
  open(x, y) {
    return client.runOnServer(this, 'open', {
      x: x,
      y: y,
    });
  }


  /**
   * Attacks the specified projectile.
   *
   * @param {Stardash.Projectile} missile - The projectile being shot down.
   * @returns {boolean} - True if successfully attacked, false otherwise.
   */
  shootDown(missile) {
    return client.runOnServer(this, 'shootDown', {
      missile: missile,
    });
  }


  /**
   * Grab materials from a friendly unit. Doesn't use a action.
   *
   * @param {Stardash.Unit} unit - The unit you are grabbing the resources from.
   * @param {number} amount - The amount of materials to you with to grab. Amounts <= 0 will pick up all the materials that the unit can.
   * @param {string} material - The material the unit will pick up. 'resource1', 'resource2', or 'resource3'.
   * @returns {boolean} - True if successfully taken, false otherwise.
   */
  transfer(unit, amount, material) {
    return client.runOnServer(this, 'transfer', {
      unit: unit,
      amount: amount,
      material: material,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Unit;
