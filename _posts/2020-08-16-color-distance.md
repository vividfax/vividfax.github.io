---
layout: post
title:  "Calculate the distance between two colors in p5.js"
---
{::options parse_block_html="true" /}

<div class="col-12 offset-sm-0 col-md-8 offset-md-2 col-lg-6 offset-lg-3 vertical-center">

#### Calculate the distance between two colors in p5.js
*16 August 2020*

<br>

In building [Wayfinder](https://vividfax.github.io/wayfinder/) I needed to calculate the distance between two colors in order to find the closest color match.

The function takes two [color object](https://p5js.org/reference/#/p5/color) as inputs, and gives a number between 0 and 765, where a lower number indicates a closer match.

```
let black = color('#000');
let white = color('#fff');

let distance = colorDistance(black, white);

function colorDistance(first, second) {

    let r = abs(red(first) - red(second));
    let g = abs(green(first) - green(second));
    let b = abs(blue(first) - blue(second));

    return r + g + b;
}
```

[abs()](https://p5js.org/reference/#/p5/abs) gives the absolute value of a number; turning any negative numbers into positives.

</div>
