# Lesson 1: Graphics Contexts

In this lesson, we're going to be talking about the graphics context, which is an object that represents the
entire rendering API.

## Theory
There are a number of coordinate systems involved when dealing with
computer graphics. For the purposes of this lesson, we're going to
focus on what are know as _screen coordinates_. Often, it can be confusing
when discussing coordinate systems in computer graphics, and knowing which
coordinate system the system is in is often a significant part of
debugging graphics programs. You can think of _screen coordinates_
as the "end result" we want to get to: that is, it's a way to reference
individual pixels on the _output device_.

Depending on the graphics API being used, _screen coordinates_ may define
the origin point either in the upper left corner of the screen or the lower
left corner of the screen. For example, OpenGL defines the origin in the
[lower right corner](https://learnopengl.com/Getting-started/Coordinate-Systems) of the _output device_, but the 2D canvas rendering
context defines the origin in the [upper left corner](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes). For
the purposes of this lesson, we're only going to be focusing on the
2D Canvas API, so you can assume that the origin will always be the upper
left corner of the device. (**NOTE**: "Device" here is referring to the
`<canvas>` element, _not_ the actual moniitor displaying the graphic).

When we define the `<canvas>` element, we can optionally give `width`
and `height` parameters. These are defined as _pixels_, but they are
[CSS pixels](https://webplatform.github.io/docs/tutorials/understanding-css-units/). _CSS pixels_ are not the same as
_device pixels_. _device pixels_ reference the pixels on your output
_display device_, but _CSS pixels_ are _resolution independent pixel
representations_.

What does this mean?

When we render to an output device (read: display), we need to perform an
operation called _rasterization_. This means that objects such as rectangles, cubes, triangles, lines, text, etc. need to be converted to
pixels on the screen. This is typically done through a process called
_scanline conversion_. _scanline conversion_ takes individual horizontal
lines of device pixels (typically starting from `y=0` and interating through each line until `y=display height`). These "scanlines" are then
intersected with any objects in the scene, filling a pixel if it detects
an intersection. (We'll get into more detail about _rasterization_ in a
future lesson).

This conversion process happens at the _very end_ of the rendering
pipeline, and it's typically handled by the graphics hardware. When
we reference pixels in our code, we need them to be independent of the
individual characteristics of the output display device, because we,
as the developer of the program, don't know what kind of hardware the
code will eventually be run on. For example, I might be running it on
a 1200x980 LCD monitor, but you might be running it on a 1080x2400 Pixel 6
with display density of 411dpi. Now, this might seem silly for `<canvas>`
elements, but consider that, in CSS, when we specify the unit `px`, we
could be intermixing it with other units, such as `em`, or even `mm`.
The display _density_ of dpi (device pixels per inch) affects where the
final rendering will be if its specified in real units, such as `in`.

CSS pixels also get scaled to a different _dpi_ if the device demands it.
In the [CSS Values and Units Specification](https://www.w3.org/TR/css3-values/#compat), it's made clear that _CSS Pixels_ assume a 96dpi.
That is, there are 96 CSS pixels in 1 inch, so if the device dpi ends up
being different than 96, the CSS pixels will be scaled up or down
accordingly.

All of this is a long-winded way of saying that if you specify:
```
<canvas width="500" height="500"></canvas>
```
You may not actually be working with 500x500 _device pixels_.


## Code Examples
  - [Part 1: Basic Canvas Commands](./src/part1.html)
  - [Part 2: Specifying a width and height](./src/part2.html)

## References
  - [Canvas API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
  - [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)