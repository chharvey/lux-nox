  var scheme = {
    'Solarized' : {
      base03  : { name: 'Solarized Base03'  , code: '#002b36' , bg_class: 'a-bc-s03' , fg_class: 'a-c-s03' , br_class: 'a-rc-s03' }
    , base02  : { name: 'Solarized Base02'  , code: '#073642' , bg_class: 'a-bc-s02' , fg_class: 'a-c-s02' , br_class: 'a-rc-s02' }
    , base01  : { name: 'Solarized Base01'  , code: '#586e75' , bg_class: 'a-bc-s01' , fg_class: 'a-c-s01' , br_class: 'a-rc-s01' }
    , base00  : { name: 'Solarized Base00'  , code: '#657b83' , bg_class: 'a-bc-s00' , fg_class: 'a-c-s00' , br_class: 'a-rc-s00' }
    , base0   : { name: 'Solarized Base0'   , code: '#839496' , bg_class: 'a-bc-s0'  , fg_class: 'a-c-s0'  , br_class: 'a-rc-s0'  }
    , base1   : { name: 'Solarized Base1'   , code: '#93a1a1' , bg_class: 'a-bc-s1'  , fg_class: 'a-c-s1'  , br_class: 'a-rc-s1'  }
    , base2   : { name: 'Solarized Base2'   , code: '#eee8d5' , bg_class: 'a-bc-s2'  , fg_class: 'a-c-s2'  , br_class: 'a-rc-s2'  }
    , base3   : { name: 'Solarized Base3'   , code: '#fdf6e3' , bg_class: 'a-bc-s3'  , fg_class: 'a-c-s3'  , br_class: 'a-rc-s3'  }
    , red     : { name: 'Solarized Red'     , code: '#dc322f' , bg_class: 'a-bc-sr'  , fg_class: 'a-c-sr'  , br_class: 'a-rc-sr'  }
    , orange  : { name: 'Solarized Orange'  , code: '#cb4b16' , bg_class: 'a-bc-so'  , fg_class: 'a-c-so'  , br_class: 'a-rc-so'  }
    , yellow  : { name: 'Solarized Yellow'  , code: '#b58900' , bg_class: 'a-bc-sy'  , fg_class: 'a-c-sy'  , br_class: 'a-rc-sy'  }
    , green   : { name: 'Solarized Green'   , code: '#859900' , bg_class: 'a-bc-sg'  , fg_class: 'a-c-sg'  , br_class: 'a-rc-sg'  }
    , cyan    : { name: 'Solarized Cyan'    , code: '#2aa198' , bg_class: 'a-bc-sc'  , fg_class: 'a-c-sc'  , br_class: 'a-rc-sc'  }
    , blue    : { name: 'Solarized Blue'    , code: '#268bd2' , bg_class: 'a-bc-sb'  , fg_class: 'a-c-sb'  , br_class: 'a-rc-sb'  }
    , violet  : { name: 'Solarized Violet'  , code: '#6c71c4' , bg_class: 'a-bc-sv'  , fg_class: 'a-c-sv'  , br_class: 'a-rc-sv'  }
    , magenta : { name: 'Solarized Magenta' , code: '#d33682' , bg_class: 'a-bc-sm'  , fg_class: 'a-c-sm'  , br_class: 'a-rc-sm'  }
    }
  , 'Lunarized' : {
      base03  : { name: 'Lunarized Base03'  , code: '#360b00' , bg_class: 'a-bc-l03' , fg_class: 'a-c-l03' , br_class: 'a-rc-l03' }
    , base02  : { name: 'Lunarized Base02'  , code: '#421307' , bg_class: 'a-bc-l02' , fg_class: 'a-c-l02' , br_class: 'a-rc-l02' }
    , base01  : { name: 'Lunarized Base01'  , code: '#755f58' , bg_class: 'a-bc-l01' , fg_class: 'a-c-l01' , br_class: 'a-rc-l01' }
    , base00  : { name: 'Lunarized Base00'  , code: '#836d65' , bg_class: 'a-bc-l00' , fg_class: 'a-c-l00' , br_class: 'a-rc-l00' }
    , base0   : { name: 'Lunarized Base0'   , code: '#968583' , bg_class: 'a-bc-l0'  , fg_class: 'a-c-l0'  , br_class: 'a-rc-l0'  }
    , base1   : { name: 'Lunarized Base1'   , code: '#a19393' , bg_class: 'a-bc-l1'  , fg_class: 'a-c-l1'  , br_class: 'a-rc-l1'  }
    , base2   : { name: 'Lunarized Base2'   , code: '#d5dbee' , bg_class: 'a-bc-l2'  , fg_class: 'a-c-l2'  , br_class: 'a-rc-l2'  }
    , base3   : { name: 'Lunarized Base3'   , code: '#e3eafd' , bg_class: 'a-bc-l3'  , fg_class: 'a-c-l3'  , br_class: 'a-rc-l3'  }
    , cyan    : { name: 'Lunarized Cyan'    , code: '#23cdd0' , bg_class: 'a-bc-lc'  , fg_class: 'a-c-lc'  , br_class: 'a-rc-lc'  }
    , blue    : { name: 'Lunarized Blue'    , code: '#34b4e9' , bg_class: 'a-bc-lb'  , fg_class: 'a-c-lb'  , br_class: 'a-rc-lb'  }
    , indigo  : { name: 'Lunarized Indigo'  , code: '#4a76ff' , bg_class: 'a-bc-li'  , fg_class: 'a-c-li'  , br_class: 'a-rc-li'  }
    , violet  : { name: 'Lunarized Violet'  , code: '#7a66ff' , bg_class: 'a-bc-lv'  , fg_class: 'a-c-lv'  , br_class: 'a-rc-lv'  }
    , red     : { name: 'Lunarized Red'     , code: '#d55e67' , bg_class: 'a-bc-lr'  , fg_class: 'a-c-lr'  , br_class: 'a-rc-lr'  }
    , orange  : { name: 'Lunarized Orange'  , code: '#d9742d' , bg_class: 'a-bc-lo'  , fg_class: 'a-c-lo'  , br_class: 'a-rc-lo'  }
    , yellow  : { name: 'Lunarized Yellow'  , code: '#938e3b' , bg_class: 'a-bc-ly'  , fg_class: 'a-c-ly'  , br_class: 'a-rc-ly'  }
    , green   : { name: 'Lunarized Green'   , code: '#2cc97d' , bg_class: 'a-bc-lg'  , fg_class: 'a-c-lg'  , br_class: 'a-rc-lg'  }
    }
  }
  /*
   * A set of themes comprised of four parameters:
   * 1. mode              - either dark or light (independent of scheme)
   * 2. foreground scheme - a set of colors used for the foreground bases
   * 3. background scheme - a set of colors used for the background bases
   * 4. accent scheme     - a set of colors used for the accent colors
   * Example:
   * var context = {
   *   'Solarized': {
   *     dark: {
   *       text : { class : 'a-c-s0', name: 'Solarized Base0' }
   *     , emph : { ... }
   *     , ...
   *     }
   *   , light: { ... }
   *     accents: {
   *       ctl : { class : 'a-c-sr', name: 'Solarized Red' }
   *     , opr : { ... }
   *     , ...
   *     }
   *   }
   * , 'Lunarzied': { ... }
   * }
   */
  var context = {}
  ;(function () {
    var bases = {
      text : {
        ground: 'fg'
      , color: {
          dark:  'base0'
        , light: 'base00'
        }
      }
    , emph : {
        ground: 'fg'
      , color: {
          dark:  'base1'
        , light: 'base01'
        }
      }
    , deemph : {
        ground: 'fg'
      , color: {
          dark:  'base01'
        , light: 'base1'
        }
      }
    , hilite : {
        ground: 'bg'
      , color: {
          dark:  'base02'
        , light: 'base2'
        }
      }
    , bg : {
        ground: 'bg'
      , color: {
          dark:  'base03'
        , light: 'base3'
        }
      }
    }
    var accents = {
      ctl: { color: 'red'     }
    , opr: { color: 'orange'  }
    , kwd: { color: 'yellow'  }
    , cst: { color: 'green'   }
    , str: { color: 'cyan'    }
    , cmd: { color: 'blue'    }
    , arg: { color: 'indigo'  , color_alt: 'violet' }
    , obj: { color: 'magenta' , color_alt: 'violet' }
    }
    for (var sch in scheme) {
      context[sch] = { dark: {}, light: {} }
      for (var mod of ['dark','light']) {
        for (var comp in bases) {
          context[sch][mod][comp] = {
            class: scheme[sch][bases[comp].color[mod]][bases[comp].ground+'_class']
          , name:  scheme[sch][bases[comp].color[mod]].name
          }
        }
      }
      context[sch].accent = {}
      for (var acc in accents) {
        var colortest = scheme[sch][accents[acc].color] || scheme[sch][accents[acc].color_alt]
        context[sch].accent[acc] = {
          class: colortest.fg_class
        , name:  colortest.name
        }
      }
    }
  })()
  /*
   * Returns a set of colors for a theme.
   * @param settings - an object with four properties:
   *                   1. `mode`      - ['dark'|'light']
   *                   2. `fg_scheme` - ['Solarized'|'Lunarized']
   *                   3. `bg_scheme` - ['Solarized'|'Lunarized']
   *                   4. `ac_scheme` - ['Solarized'|'Lunarized']
   * @returns - an object with a number of colors corresponding to the theme.
   */
  function createTheme(settings) {
    var empty_color = { class: '' , name: '' }
    var returned = { settings : settings }
    if (settings.fg_scheme && settings.mode) {
      returned.text   = context[settings.fg_scheme][settings.mode].text
      returned.emph   = context[settings.fg_scheme][settings.mode].emph
      returned.deemph = context[settings.fg_scheme][settings.mode].deemph
      returned.hilite = context[settings.bg_scheme][settings.mode].hilite
      returned.bg     = context[settings.bg_scheme][settings.mode].bg
    } else {
      returned.text = returned.emph = returned.deemph = returned.hilite = returned.bg = empty_color
    }
    if (settings.ac_scheme) {
      returned.ctl = context[settings.ac_scheme].accent.ctl
      returned.opr = context[settings.ac_scheme].accent.opr
      returned.kwd = context[settings.ac_scheme].accent.kwd
      returned.cst = context[settings.ac_scheme].accent.cst
      returned.str = context[settings.ac_scheme].accent.str
      returned.cmd = context[settings.ac_scheme].accent.cmd
      returned.arg = context[settings.ac_scheme].accent.arg
      returned.obj = context[settings.ac_scheme].accent.obj
    } else {
      returned.ctl = returned.opr = returned.kwd = returned.cst = returned.str = returned.cmd = returned.arg = returned.obj = empty_color
    }
    return returned
    return {
      settings : settings
    , text   : (settings.fg_scheme && settings.mode) ? context[settings.fg_scheme][settings.mode].text   : empty_color
    , emph   : (settings.fg_scheme && settings.mode) ? context[settings.fg_scheme][settings.mode].emph   : empty_color
    , deemph : (settings.fg_scheme && settings.mode) ? context[settings.fg_scheme][settings.mode].deemph : empty_color
    , hilite : (settings.bg_scheme && settings.mode) ? context[settings.bg_scheme][settings.mode].hilite : empty_color
    , bg     : (settings.bg_scheme && settings.mode) ? context[settings.bg_scheme][settings.mode].bg     : empty_color
    , ctl    : (settings.ac_scheme) ? context[settings.ac_scheme].accent.ctl : empty_color
    , opr    : (settings.ac_scheme) ? context[settings.ac_scheme].accent.opr : empty_color
    , kwd    : (settings.ac_scheme) ? context[settings.ac_scheme].accent.kwd : empty_color
    , cst    : (settings.ac_scheme) ? context[settings.ac_scheme].accent.cst : empty_color
    , str    : (settings.ac_scheme) ? context[settings.ac_scheme].accent.str : empty_color
    , cmd    : (settings.ac_scheme) ? context[settings.ac_scheme].accent.cmd : empty_color
    , arg    : (settings.ac_scheme) ? context[settings.ac_scheme].accent.arg : empty_color
    , obj    : (settings.ac_scheme) ? context[settings.ac_scheme].accent.obj : empty_color
    }
  }
  var preset_theme = {
    solarized_dark : createTheme({
      mode: 'dark'
    , bg_scheme: 'Solarized'
    , fg_scheme: 'Solarized'
    , ac_scheme: 'Solarized'
    })
  , solarized_light : createTheme({
      mode: 'light'
    , bg_scheme: 'Solarized'
    , fg_scheme: 'Solarized'
    , ac_scheme: 'Solarized'
    })
  , lunarized_dark : createTheme({
      mode: 'dark'
    , bg_scheme: 'Lunarized'
    , fg_scheme: 'Lunarized'
    , ac_scheme: 'Lunarized'
    })
  , lunarized_light : createTheme({
      mode: 'light'
    , bg_scheme: 'Lunarized'
    , fg_scheme: 'Lunarized'
    , ac_scheme: 'Lunarized'
    })
  , solarized_dark_mod : createTheme({
      mode: 'dark'
    , bg_scheme: 'Solarized'
    , fg_scheme: 'Solarized'
    , ac_scheme: 'Lunarized'
    })
  , solarized_light_mod : createTheme({
      mode: 'light'
    , bg_scheme: 'Solarized'
    , fg_scheme: 'Lunarized'
    , ac_scheme: 'Solarized'
    })
  , lunarized_dark_mod : createTheme({
      mode: 'dark'
    , bg_scheme: 'Lunarized'
    , fg_scheme: 'Solarized'
    , ac_scheme: 'Lunarized'
    })
  , lunarized_light_mod : createTheme({
      mode: 'light'
    , bg_scheme: 'Lunarized'
    , fg_scheme: 'Lunarized'
    , ac_scheme: 'Solarized'
    })
  }
    function removeTheme(container) {
      var theme = createTheme({
        mode: container.attr('data-mode')
      , bg_scheme: container.attr('data-bg_scheme')
      , fg_scheme: container.attr('data-fg_scheme')
      , ac_scheme: container.attr('data-ac_scheme')
      })
      container.removeAttr('data-mode')
        .removeAttr('data-bg_scheme')
        .removeAttr('data-fg_scheme')
        .removeAttr('data-ac_scheme')
      container.removeClass(theme.bg.class + ' ' + theme.text.class)
      container.find('.js-emph').removeClass(theme.emph.class)
      container.find('.js-deemph').removeClass(theme.deemph.class)
      container.find('.js-hilite').removeClass(theme.hilite.class)
      container.find('.js-ctl').removeClass(theme.ctl.class)
      container.find('.js-opr').removeClass(theme.opr.class)
      container.find('.js-kwd').removeClass(theme.kwd.class)
      container.find('.js-cst').removeClass(theme.cst.class)
      container.find('.js-str').removeClass(theme.str.class)
      container.find('.js-cmd').removeClass(theme.cmd.class)
      container.find('.js-arg').removeClass(theme.arg.class)
      container.find('.js-obj').removeClass(theme.obj.class)
      return theme
    }
    function applyTheme(theme, container) {
      removeTheme(container)
      container.attr('data-mode', theme.settings.mode)
        .attr('data-bg_scheme', theme.settings.bg_scheme)
        .attr('data-fg_scheme', theme.settings.fg_scheme)
        .attr('data-ac_scheme', theme.settings.ac_scheme)
      container.addClass(theme.bg.class + ' ' + theme.text.class)
      container.find('.js-emph').addClass(theme.emph.class)
      container.find('.js-deemph').addClass(theme.deemph.class)
      container.find('.js-hilite').addClass(theme.hilite.class)
      container.find('.js-ctl').addClass(theme.ctl.class)
      container.find('.js-opr').addClass(theme.opr.class)
      container.find('.js-kwd').addClass(theme.kwd.class)
      container.find('.js-cst').addClass(theme.cst.class)
      container.find('.js-str').addClass(theme.str.class)
      container.find('.js-cmd').addClass(theme.cmd.class)
      container.find('.js-arg').addClass(theme.arg.class)
      container.find('.js-obj').addClass(theme.obj.class)
    }
    function editTheme(changes, container) {
      var settings = removeTheme(container).settings
      changes(settings)
      applyTheme(createTheme(settings), container)
    }
    $('input[name="preset"]').change(function () {
      var theme = preset_theme[$(this).val()]
      $('select[data-param="mode"]').val(theme.settings.mode)
      $('select[data-param="bg_scheme"]').val(theme.settings.bg_scheme)
      $('select[data-param="fg_scheme"]').val(theme.settings.fg_scheme)
      $('select[data-param="ac_scheme"]').val(theme.settings.ac_scheme)
      applyTheme(theme, $('.js-theme'))
    })
    $('select[name="cyo"]').change(function () {
      var self = this
      $('input[name="preset"]').removeAttr('checked')
      editTheme(function (settings) {
        settings[$(self).attr('data-param')] = $(self).val()
      }, $('.js-theme'))
    })
    $('input[type="reset"]').click(function () {
      removeTheme($('.js-theme'))
    })
