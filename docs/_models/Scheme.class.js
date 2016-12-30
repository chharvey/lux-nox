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
    this._modes = []
    this._accents = {}
  }

  // METHODS
  /**
   * Add a NamedColor object to this scheme.
   * @param {NamedColor} $namedColor the NamedColor object to add
   */
  Scheme.prototype.addColor = function addColor($namedColor) {
    this._colors.push($namedColor)
    return this
  }
  /**
   * Return a NamedColor object, by name, added to this scheme.
   * @param  {string} name the name associated with the NamedColor object to get
   * @return {?NamedColor} a NamedColor object
   */
  Scheme.prototype.getColor = function getColor(name) {
    return this._colors.find(function ($namedColor) { return $namedColor.name() === name }) || null
  }

  /**
   * Add a mode to this scheme. Modes determine base colors
   * such as text, emphasis, and deemphasis.
   * Modes do not determine accent colors.
   * The given object argument must have the following format,
   * @param {string} name the name of the mode
   * @param {Object<string>} $obj an object with the following string-string pairs:
   * @param {string} $obj.text   the string name of the colorish object added to this scheme used for normal text
   * @param {string} $obj.emph   the string name of the colorish object added to this scheme used for emphasized text
   * @param {string} $obj.deemph the string name of the colorish object added to this scheme used for deemphasized text
   * @param {string} $obj.hilite the string name of the colorish object added to this scheme used for hilighted text
   * @param {string} $obj.bg     the string name of the colorish object added to this scheme used for background
   * @return {Scheme} this scheme
   */
  Scheme.prototype.addMode = function addMode(name, $obj) {
    this._modes.push({
      name:   name
    , text:   $obj.text
    , emph:   $obj.emph
    , deemph: $obj.deemph
    , hilite: $obj.hilite
    , bg:     $obj.bg
    })
    return this
  }
  /**
   * Return a mode, by name, added to this scheme.
   * @param  {string} name the name associated with the mode to get
   * @return {?Object} the mode whose name was given
   */
  Scheme.prototype.getMode = function getMode(name) {
    return this._modes.find(function (el) { return el.name === name }) || null
  }

  /**
   * Set or get the collection of accent colors for this scheme.
   * Accent colors do not change based on [dark|light] mode.
   * The argument, if given, must be an object
   * whose keys are the names of the accent usage, and
   * whose values are the names of colorish objects added to this scheme.
   * @param  {Object<string>} $obj an object with string-string pairs
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
