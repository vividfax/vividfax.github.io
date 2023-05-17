---
layout: project
title: Blackletter Walk
description: Typography, Generative art, Web Development
permalink: /blackletter-walk/
---
{::options parse_block_html="true" /}

<div class="col-12 mb-5">
![A single frame from a Blackletter Walk gif](../assets/images/blackletterwalk0.png)
</div>

<div class="col-12 offset-sm-0 col-md-8 offset-md-2 col-lg-6 offset-lg-3 vertical-center blackletter-walk">

# Blackletter Walk

<div class="indent">

is an automatic writing gif **bot** that borrows its visual language from blackletter calligraphy.

[twitter.com/blackletterwalk](https://twitter.com/blackletterwalk)

I'd been reading up on typography and was inspired by precision of the ever-present grid. After watching some [blackletter tutorials](https://youtu.be/w6nvr_V0E68?t=1056) I decided I wanted to emulate the movement of chalk on a blackboard, with the chalk held at at 35 degree angle, and where the thickness of the stroke is the same as the space between strokes. I'd also been playing around with OCR (optical character recognition) around the same time and so I threw that in too as a caption for the gif. Not sure what I was expecting the OCR to pick up from randomly generated lines but I like the partnership between the two warped versions of written communication.

</div><br>

**Generative art**<br>

<div class="indent">

The animation is drawn with **Node.js**’s node-canvas and gifencoder, and the last frame is then run through Ocrad.js to provide an **OCR** text preview that accompanies the tweet.

</div><br>

**Web development**

<div class="indent">

The bot lives on **Heroku**, tweeting automatically through the **Twitter API** via Twit.

</div>

</div>
