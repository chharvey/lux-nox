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

  // STATIC MEMBERS

  return Scheme
})()
