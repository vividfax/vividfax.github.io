---
layout: post
title:  "Find the top n closest matches from a list"
---
{::options parse_block_html="true" /}

<div class="col-12 offset-sm-0 col-md-8 offset-md-2 col-lg-6 offset-lg-3 vertical-center">

#### Find the top n closest matches from a list
17 August 2020

<br>

For Colourway I needed to display the top 3 yarn matches for the color chosen by the user using a color picker. To do this I would need to run through my entire list of yarns and select the top 3 matches in descending order.

```
const maxDistance = 765;
let distances = [];

const numberOfMatches = 3;
let matches = [];

for (let i = 0; i < numberOfMatches; i++) {

    matches.push(maxDistance);
    distances.push('');
}
```

In this case, the maximum [distance between the chosen color and any yarn option](http://vividfax.github.io/2020/08/16/color-distance.html) is 765 (255*3). A lower number indicates a closer match. I've chosen the number of matches I want as 3.

```
function getMatches(colorPicker, data, numberOfMatches) {

    for (let i = 0; i < data.length; i++) {

        let distance = colorDistance(colorPicker.color, data[i].color);

        for (let j = 0; j < numberOfMatches; j++) {

            if (distance < distances[j]) {

                for (let k = numberOfMatches - 1; k > j; k--) {

                    distances[k] = distances[k - 1];
                    matches[k] = matches[k - 1];
                }
                distances[j] = distance;
                matches[j] = data[i];

                break;
            }
        }
    }
}
```

First, iterate through the list of options, and for each, [calculate the distance between the color picker's color value and the selected yarn's color](http://vividfax.github.io/2020/08/16/color-distance.html). Then iterate through the list of matches, and if the current option is closer than the current match, bump the current match down the list of matches and save the current option as a match.

This gives an array of n matches in descending order.

</div>
