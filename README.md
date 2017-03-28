# lux-nox
A repository containing the Solarized and Lunarized color schemes.

## Description

Lux-Nox is a stylesheet containing 32 colors, and classes for using those colors.

- 16 colors from the *Solarized* scheme (8 bases and 8 accents)
- 16 colors from the *Lunarized* scheme (8 bases and 8 accents)
- classes for setting the CSS properties:
  - `color`
  - `background-color`
  - `border-color`

## Usage
1. Locally
  ```
  $ npm install bangs
  ```
  ```html
  <link rel="stylesheet" href="/node_modules/lux-nox/lux-nox[.min].css"/>
  ```

2. Remotely from a CDN (not recommended)
  ```html
  <link rel="stylesheet" href="https://cdn.rawgit.com/chharvey/lux-nox/‹master›/lux-nox[.min].css"/>
  ```

3. Remotely from this site (not recommended)
  ```html
  <link rel="stylesheet" href="https://chharvey.github.io/lux-nox/lux-nox[.min].css"/>
  ```

where `‹master›` can be a branch or a tag, and optional `.min` is for the minified version.

## Inspiration and Construction

*Solarized* was developed by [Ethan Schoonover](http://ethanschoonover.com/solarized).
Inspired by his work, I developed the *Lunarized* Scheme in an attempt to
cool the Solarized Light background colors. The Light mode was appealing to me
but I didn’t like the yellowish tint. So I inverted the background color and
it gave me a bluish tint, like the full moon—hence, “lunar”.
I tried inverting the accent colors as well,
but got ugly results, so I complemented them instead.

In the Lunarized Scheme, the bases are inverses of the Solarized Bases while
the accents are complements of the Solarized Accents.
(The inverse of a color is a 180˚ hue rotation of that color, while the complement, or negative,
of a color is the difference between that color and white.)

```
inverse(@color)    : spin(@color, 180);
complement(@color) : rgb( 255-red(@color), 255-green(@color), 255-blue(@color) );
```

## Homepage and Docs
https://chharvey.github.io/lux-nox/
