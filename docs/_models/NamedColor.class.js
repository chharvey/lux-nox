const Color = require('extrajs-color')

module.exports = class NamedColor extends Color {
  /**
   * An extension of Color. Has additional features like name and CSS class.
   * Construct a new NamedColor object.
   * @constructor
   * @extends Color
   * @param {Color} $color the color used to create this named color
   * @param {string} name   the name of this named color
   * @param {string} suffix the suffix for any CSS classes
   */
  constructor($color, name, suffix) {
    super(...$color.rgb)
    this._NAME = name
    this._SUFFIX = suffix
  }

  /**
   * Return the name of this named color.
   * @return {string} the name of this color
   */
  name() {
    return this._NAME
  }

  /**
   * Return the suffix of this named color.
   * @return {string} the css class suffix of this color
   */
  suffix() {
    return this._SUFFIX
  }

  /**
   * Return the CSS atom class for background color.
   * @return {string} css classname assigning background color
   */
  bgClass() { return '-bc' + this._SUFFIX }
  /**
   * Return the CSS atom class for foreground color.
   * @return {string} css classname assigning foreground color
   */
  fgClass() { return '-c'  + this._SUFFIX }
  /**
   * Return the CSS atom class for border color.
   * @return {string} css classname assigning border color
   */
  brClass() { return '-rc' + this._SUFFIX }
}
