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
    this._accents = {}
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
   * @return {?Object} an Object of type { name: <string>, color: <Color>, suffix: <string> }
   */
  Scheme.prototype.getColor = function getColor(name) {
    return this._colors.find(function (el) { return el.name === name }) || null
    // return this._colors[name] || null
  }
  /**
   * Get the total name of the color. Includes Scheme name and color name.
   * @param  {Object} $colorish a colorish object added to this scheme
   * @return {string} total name of the color, including this scheme
   */
  Scheme.prototype.colorName = function colorName($colorish) {
    return this._NAME + ' ' + $colorish.name
  }

  /**
   * Set or get the collection of accent colors for this scheme.
   * Accent colors do not change based on [dark|light] mode.
   * The argument, if given, must be an object
   * whose keys are the names of the accent usage, and
   * whose values are the names of colorish objects added to this scheme.
   * @param  {Object<string>} $obj an Object with string-string pairs
   * @return {Scheme|Object<Color>} this scheme || the accent colors
   */
  Scheme.prototype.accents = function accents($obj) {
    if (arguments.length >= 1) {
      this._accents = $obj
      return this
    } else return this._accents
  }

  // STATIC MEMBERS
  Scheme.bgClass = function bgClass($colorish) { return 'a-bc' + $colorish.suffix }
  Scheme.fgClass = function fgClass($colorish) { return 'a-c'  + $colorish.suffix }
  Scheme.brClass = function brClass($colorish) { return 'a-rc' + $colorish.suffix }

  return Scheme
})()
