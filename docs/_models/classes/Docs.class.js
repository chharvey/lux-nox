var Page = require('sitepage').Page
var Color = require('csscolor').Color
var NamedColor = require('../NamedColor.class.js')
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
    .addColor(new NamedColor(Color.fromString('#002b36'), 'Solarized Base03' , '-s03'))
    .addColor(new NamedColor(Color.fromString('#073642'), 'Solarized Base02' , '-s02'))
    .addColor(new NamedColor(Color.fromString('#586e75'), 'Solarized Base01' , '-s01'))
    .addColor(new NamedColor(Color.fromString('#657b83'), 'Solarized Base00' , '-s00'))
    .addColor(new NamedColor(Color.fromString('#839496'), 'Solarized Base0'  , '-s0' ))
    .addColor(new NamedColor(Color.fromString('#93a1a1'), 'Solarized Base1'  , '-s1' ))
    .addColor(new NamedColor(Color.fromString('#eee8d5'), 'Solarized Base2'  , '-s2' ))
    .addColor(new NamedColor(Color.fromString('#fdf6e3'), 'Solarized Base3'  , '-s3' ))
    .addColor(new NamedColor(Color.fromString('#dc322f'), 'Solarized Red'    , '-sr' ))
    .addColor(new NamedColor(Color.fromString('#cb4b16'), 'Solarized Orange' , '-so' ))
    .addColor(new NamedColor(Color.fromString('#b58900'), 'Solarized Yellow' , '-sy' ))
    .addColor(new NamedColor(Color.fromString('#859900'), 'Solarized Green'  , '-sg' ))
    .addColor(new NamedColor(Color.fromString('#2aa198'), 'Solarized Cyan'   , '-sc' ))
    .addColor(new NamedColor(Color.fromString('#268bd2'), 'Solarized Blue'   , '-sb' ))
    .addColor(new NamedColor(Color.fromString('#6c71c4'), 'Solarized Violet' , '-sv' ))
    .addColor(new NamedColor(Color.fromString('#d33682'), 'Solarized Magenta', '-sm' ))

  /**
   * The Lunarized color palette
   * @type {Scheme}
   */
  Docs.LUNARIZED = new Scheme('Lunarized')
    .addColor(new NamedColor(Color.fromString('#360b00'), 'Lunarized Base03' , '-l03'))
    .addColor(new NamedColor(Color.fromString('#421307'), 'Lunarized Base02' , '-l02'))
    .addColor(new NamedColor(Color.fromString('#755f58'), 'Lunarized Base01' , '-l01'))
    .addColor(new NamedColor(Color.fromString('#836d65'), 'Lunarized Base00' , '-l00'))
    .addColor(new NamedColor(Color.fromString('#968583'), 'Lunarized Base0'  , '-l0' ))
    .addColor(new NamedColor(Color.fromString('#a19393'), 'Lunarized Base1'  , '-l1' ))
    .addColor(new NamedColor(Color.fromString('#d5dbee'), 'Lunarized Base2'  , '-l2' ))
    .addColor(new NamedColor(Color.fromString('#e3eafd'), 'Lunarized Base3'  , '-l3' ))
    .addColor(new NamedColor(Color.fromString('#23cdd0'), 'Lunarized Cyan'   , '-lc' ))
    .addColor(new NamedColor(Color.fromString('#34b4e9'), 'Lunarized Blue'   , '-lb' ))
    .addColor(new NamedColor(Color.fromString('#4a76ff'), 'Lunarized Indigo' , '-li' ))
    .addColor(new NamedColor(Color.fromString('#7a66ff'), 'Lunarized Violet' , '-lv' ))
    .addColor(new NamedColor(Color.fromString('#d55e67'), 'Lunarized Red'    , '-lr' ))
    .addColor(new NamedColor(Color.fromString('#d9742d'), 'Lunarized Orange' , '-lo' ))
    .addColor(new NamedColor(Color.fromString('#938e3b'), 'Lunarized Yellow' , '-ly' ))
    .addColor(new NamedColor(Color.fromString('#2cc97d'), 'Lunarized Green'  , '-lg' ))

  return Docs
})()
