var Color = require('csscolor').Color

/**
 * An extension of Color. Has additional features like name and CSS class.
 * @type {NamedColor}
 * @extends Color
 */
module.exports = (function () {
  // CONSTRUCTOR
  /**
   * Construct a new NamedColor object.
   * @param {Color} $color the color used to create this named color
   * @param {string} name   the name of this named color
   * @param {string} suffix the suffix for any CSS classes
   */
  function NamedColor($color, name, suffix) {
    return Color.call(this, $color.rgb())
    this._NAME = name
    this._SUFFIX = suffix
  }

  // METHODS
  /**
   * Return the name of this named color.
   * @return {string} the name of this color
   */
  NamedColor.prototype.name = function name() {
    return this._NAME
  }

  /**
   * Return the suffix of this named color.
   * @return {string} the css class suffix of this color
   */
  NamedColor.prototype.suffix = function suffix() {
    return this._SUFFIX
  }

  // STATIC MEMBERS

  return NamedColor
})()
