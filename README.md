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