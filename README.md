# lux-nox
A repository containing the Solarized and Lunarized color schemes.

lux-nox is a repo containing 32 colors: 16 [Solarized](http://ethanschoonover.com/solarized)
colors and 16 Lunarized colors.

The Solarized and Lunarized color schemes are mainly used for displaying computer code, though
they could be applied anywhere.
Each color scheme has two modes: Light and Dark.
Light mode is a light background with a dark text; the stronger the emphasis, the darker the text.
Dark mode is a dark background with a light text; the stronger the emphasis, the lighter the text.
Each scheme includes 8 base colors and 8 accent colors.
The bases are dull tones for background, foreground, and stress colors, and these bases will change depending on the mode. The accents are sharp tones used for syntax highlighting, and
do not change based on the mode.

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
