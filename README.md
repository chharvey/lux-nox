# lux-nox
A repository containing the Solarized and Lunarized color schemes.

lux-nox is a repo specifically designed for using colors from the
[Solarized](http://ethanschoonover.com/solarized) and Lunarized color schemes.
The Solarized and Lunarized color schemes are mainly used for displaying computer code, though
they could be applied anywhere.

Each scheme includes 16 colors total, 8 base colors and 8 accent colors,
which are shared among two modes:

- Light mode
  - light background
  - dark text
  - stronger emphasis = darker text
- Dark mode
  - dark background
  - light text
  - stronger emphasis = lighter text

The 8 bases are dull tones for background, foreground, and stress colors, and
these bases will change depending on the mode. The 8 accents are sharp tones
used for syntax highlighting, and do not change based on the mode.

Solarized was developed by [Ethan Schoonover](http://ethanschoonover.com/solarized).
Inspired by his work, I developed the Lunarized Scheme in an attempt to
cool the Solarized Light background colors. I liked the idea of using a Light theme but I didn’t
want a yellowish tint. In the Lunarized Scheme, the bases are inverses of the Solarized Bases while
the accents are complements of the Solarized Accents.

The inverse of a color is that color with a hue rotation of 180&deg;, while the complement
of a color is the difference between that color and white.

```
inverse(@color)    : spin(@color, 180);
complement(@color) : rgb( 255 - red(@color), 255 - green(@color), 255 - blue(@color) );
```
