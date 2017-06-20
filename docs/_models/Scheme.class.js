module.exports = class Scheme {
  /**
   * A color palette.
   * Construct a new Scheme object.
   * @constructor
   * @param {string} name the name of this scheme
   * @param {Array<object>} colors an array of objects representing colors
   */
  constructor(name) {
    this._NAME = name
    this._colors = []
  }

  /**
   * Add a NamedColor object to this scheme.
   * @param {NamedColor} $namedColor the NamedColor object to add
   * @return {Scheme} this Scheme object
   */
  addColor($namedColor) {
    this._colors.push($namedColor)
    return this
  }
  /**
   * Return a NamedColor object, by name, added to this scheme.
   * @param  {string} name the name associated with the NamedColor object to get
   * @return {?NamedColor} a NamedColor object
   */
  getColor(name) {
    return this._colors.find(($namedColor) => $namedColor.name()===name) || null
  }
}
