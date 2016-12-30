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
    Color.call(this, $color.rgb())
    this._NAME = name
    this._SUFFIX = suffix
  }
  NamedColor.prototype = Object.create(Color.prototype)
  NamedColor.prototype.constructor = NamedColor

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

  /**
   * Return the CSS atom class for background color.
   * @return {string} css classname assigning background color
   */
  NamedColor.prototype.bgClass = function bgClass() { return 'a-bc' + this._SUFFIX }
  /**
   * Return the CSS atom class for foreground color.
   * @return {string} css classname assigning foreground color
   */
  NamedColor.prototype.fgClass = function fgClass() { return 'a-c'  + this._SUFFIX }
  /**
   * Return the CSS atom class for border color.
   * @return {string} css classname assigning border color
   */
  NamedColor.prototype.brClass = function brClass() { return 'a-rc' + this._SUFFIX }

  // STATIC MEMBERS

  return NamedColor
})()
