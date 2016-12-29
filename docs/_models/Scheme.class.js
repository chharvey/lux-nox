var Color = require('csscolor').Color

/**
 * A color palette.
 * @type {Scheme}
 */
module.exports = (function () {
  // CONSTRUCTOR
  /**
   * Construct a new Scheme object.
   * @param {string} name the name of this scheme
   * @param {Array<object>} colors an array of objects representing colors
   */
  function Scheme(name) {
    this._NAME = name
    this._colors = []
  }

  // METHODS
  /**
   * Add a colorish object to this scheme.
   * @param {string} name   a name associated with the color
   * @param {Color}  $color the Color object to add
   * @param {string} suffix a css-class suffix
   */
  Scheme.prototype.addColor = function addColor(name, $color, suffix) {
    this._colors.push({ name: name, color: $color, suffix: suffix })
    // this._colors[name] = { color: $color, suffix: suffix }
    return this
  }
  /**
   * Return a colorish object, by name, added to this scheme.
   * @param  {string} name the name associated with the colorish object to get
   * @return {?object} an object with a `name`, `color`, and `suffix`
   */
  Scheme.prototype.getColor = function getColor(name) {
    return this._colors.find(function (el) { return el.name === name }) || null
    // return this._colors[name] || null
  }
  /**
   * Get the total name of the color. Includes Scheme name and color name.
   * @param  {object} $colorish a colorish object added to this scheme
   * @return {string} total name of the color, including this scheme
   */
  Scheme.prototype.colorName = function colorName($colorish) {
    return this._NAME + ' ' + $colorish.name
  }

  // STATIC MEMBERS
  Scheme.bgClass = function bgClass($colorish) { return 'a-bc' + $colorish.suffix }
  Scheme.fgClass = function fgClass($colorish) { return 'a-c'  + $colorish.suffix }
  Scheme.brClass = function brClass($colorish) { return 'a-rc' + $colorish.suffix }

  return Scheme
})()
