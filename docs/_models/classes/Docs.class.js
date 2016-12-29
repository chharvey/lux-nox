var Page = require('sitepage').Page
var Color = require('csscolor').Color
var Scheme = require('../Scheme.class.js')

/**
 * A set of static members used for the site.
 * Similar to a utility class.
 * @type {Docs}
 */
module.exports = (function () {
  // CONSTRUCTOR
  function Docs() {}

  // METHODS

  // STATIC MEMBERS
  /**
   * The homepage for this project.
   * @type {Page}
   */
  Docs.SITE = (function () {
    var site = new Page({ name: 'Lux-Nox', url: '/docs/' })
      .title('Lux-Nox by Chris Harvey')
      .description('Solarized and Lunaried colors for any project.')
    site
      .add(new Page({ name: site.name(), url: 'index.html'}).description(site.description()))
      .add(new Page({ name: 'Sample'       , url: 'sample.html'}))
      .add(new Page({ name: 'Suggested Use', url: 'use.html' }))
      .add(new Page({ name: 'Accessibility', url: 'accessibility.html' }))
    return site
  })()

  /**
   * The Solarized color palette
   * @type {Scheme}
   */
  Docs.SOLARIZED = new Scheme('Solarized')
    .addColor('Base03' , Color.fromString('#002b36'), '-s03')
    .addColor('Base02' , Color.fromString('#073642'), '-s02')
    .addColor('Base01' , Color.fromString('#586e75'), '-s01')
    .addColor('Base00' , Color.fromString('#657b83'), '-s00')
    .addColor('Base0'  , Color.fromString('#839496'), '-s0' )
    .addColor('Base1'  , Color.fromString('#93a1a1'), '-s1' )
    .addColor('Base2'  , Color.fromString('#eee8d5'), '-s2' )
    .addColor('Base3'  , Color.fromString('#fdf6e3'), '-s3' )
    .addColor('Red'    , Color.fromString('#dc322f'), '-sr' )
    .addColor('Orange' , Color.fromString('#cb4b16'), '-so' )
    .addColor('Yellow' , Color.fromString('#b58900'), '-sy' )
    .addColor('Green'  , Color.fromString('#859900'), '-sg' )
    .addColor('Cyan'   , Color.fromString('#2aa198'), '-sc' )
    .addColor('Blue'   , Color.fromString('#268bd2'), '-sb' )
    .addColor('Violet' , Color.fromString('#6c71c4'), '-sv' )
    .addColor('Magenta', Color.fromString('#d33682'), '-sm' )

  /**
   * The Lunarized color palette
   * @type {Scheme}
   */
  Docs.LUNARIZED = new Scheme('Lunarized')
    .addColor('Base03' , Color.fromString('#360b00'), '-l03')
    .addColor('Base02' , Color.fromString('#421307'), '-l02')
    .addColor('Base01' , Color.fromString('#755f58'), '-l01')
    .addColor('Base00' , Color.fromString('#836d65'), '-l00')
    .addColor('Base0'  , Color.fromString('#968583'), '-l0' )
    .addColor('Base1'  , Color.fromString('#a19393'), '-l1' )
    .addColor('Base2'  , Color.fromString('#d5dbee'), '-l2' )
    .addColor('Base3'  , Color.fromString('#e3eafd'), '-l3' )
    .addColor('Cyan'   , Color.fromString('#23cdd0'), '-lc' )
    .addColor('Blue'   , Color.fromString('#34b4e9'), '-lb' )
    .addColor('Indigo' , Color.fromString('#4a76ff'), '-li' )
    .addColor('Violet' , Color.fromString('#7a66ff'), '-lv' )
    .addColor('Red'    , Color.fromString('#d55e67'), '-lr' )
    .addColor('Orange' , Color.fromString('#d9742d'), '-lo' )
    .addColor('Yellow' , Color.fromString('#938e3b'), '-ly' )
    .addColor('Green'  , Color.fromString('#2cc97d'), '-lg' )

  return Docs
})()
