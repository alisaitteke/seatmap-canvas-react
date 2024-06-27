[![LIVE DEMO](https://raw.githubusercontent.com/alisaitteke/seatmap-canvas-react/master/assets/banner_ui.png?raw=true)](https://alisaitteke.github.io/seatmap-canvas)

# Seatmap Canvas - React
This is the ReactJS implementation of the original [seatmap-canvas](https://alisaitteke.github.io/seatmap-canvas/) library, an open-source tool designed for interactive seat selection in various environments like stadiums, theaters, and event venues. Leveraging the capabilities of React and d3.js, this library provides a flexible and efficient solution for managing seat arrangements.

## Features
* React Integration: Designed specifically for React projects, offering a streamlined development experience.
* Dynamic Seat Selection: Enables interactive selection, categorization, and location of seats.
* Customizable Styles: Extensive styling options for seats, blocks, and labels to fit your application's design.
* Interactive Seat Models: Define properties and behaviors for seats, including salability, notes, and custom data.
* Block Model Configuration: Organize seats into blocks with customizable titles, colors, and labels.
* Event Handling: Simplified event listeners for seat interactions, allowing dynamic responses to user actions.


## Planned
- Vue Integration: Designed specifically for Vue or Nuxt projects, offering a streamlined development experience.
- Angular Integration: Designed specifically for Angular projects, offering a streamlined development experience.

[LIVE DEMO](https://alisaitteke.github.io/seatmap-canvas/)


## Installation
<pre>
npm i <a href="https://npm.pkg.github.com/alisaitteke/seatmap-canvas">@alisaitteke/seatmap-canvas-react</a> --save
OR
yarn add <a href="https://npm.pkg.github.com/alisaitteke/seatmap-canvas">@alisaitteke/seatmap-canvas-react</a> --save
</pre>


### Usage
```js
const seatmapRef = React.createRef();

<Seatmap 
    className="w-full flex-1 h-full" 
    ref={seatmapRef} 
    seatClick={seatClick} 
    blocks={blocks} 
    config={config}>
</Seatmap>
```

### Config
```js
const config = {
    legend: true,
    style: {
        seat: {
            hover: '#8fe100',
            color: '#f0f7fa',
            selected: '#8fe100',
            check_icon_color: '#fff',
            not_salable: '#0088d3',
            focus: '#8fe100',
        },
        legend: {
            font_color: '#3b3b3b',
            show: false
        },
        block: {
            title_color: '#fff'
        }
    }
}
```


### API

#### Zoom To Block
```js
seatmapRef.current.zoomManager.zoomToBlock(blockId)
```


#### Get Selected Seats
```js
const selectedSeats = seatmapRef.current.getSelectedSeats()

```


#### Seat Click Handler
```js
const seatClick = (seat) => {
    if (!seat.isSelected() && seat.item.salable === true) {
        seat.select()
    } else {
        seat.unSelect()
    }
}
```

#### Component Example
```js
import React from 'react';
import SeatmapCanvas from '@alisaitteke/seatmap-canvas';

const MySeatmap = () => {
    const config = {
        legend: true,
        style: {
            seat: {
                hover: '#8fe100',
                color: '#f0f7fa',
                selected: '#8fe100',
                check_icon_color: '#fff',
                not_salable: '#0088d3',
                focus: '#8fe100',
            },
            legend: {
                font_color: '#3b3b3b',
                show: false
            },
            block: {
                title_color: '#fff'
            }
        }
    }

    let blocks = [
        {
          "id": 1,
          "title": "Test Block 1",
          "color": "#2c2828",
          "labels": [
            {
              "title": "A",
              "x": -30,
              "y": 0
            },
            {
              "title": "B",
              "x": 120,
              "y": 30
            }
          ],
          "seats": [
            {
              "id": 1,
              "x": 0,
              "y": 0,
              "salable": true,
              "note": "note test",
              "title": "49"
            },
            {
              "id": 2,
              "x": 30,
              "y": 0,
              "salable": true,
              "note": "note test",
              "title": "47"
            }
          ]
        }
    ]

    const seatClick = (seat) => {
        if (!seat.isSelected() && seat.item.salable === true) {
            seat.select()   // Set select seat
        } else {
            seat.unSelect() // Unselect seat
        }
    }

    return (
        <Seatmap
            className="w-full flex-1 h-full"
            ref={seatmapRef}
            seatClick={seatClick}
            blocks={blocks}
            config={config}>
        </Seatmap>
    );
};

export default MySeatmap;

```

## Contributors
Ali Sait TEKE <alisaitt@gmail.com>
