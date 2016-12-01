var Page = require('sitepage').Page

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

  return Docs
})()
