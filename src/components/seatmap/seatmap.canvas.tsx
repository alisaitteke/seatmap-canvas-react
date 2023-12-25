import * as React from "react"
import {Component, useState} from "react";
import {SeatMapCanvas} from '@alisaitteke/seatmap-canvas'

class Seatmap extends Component {

    private seatMap = SeatMapCanvas;
    private mountSeatmap: boolean;
    private containerRef;
    private config;
    private blocks;
    private seatClick;
    private className;
    private zoomManager;

    constructor(props) {
        super(props);
        console.log('props', props)
        this.mountSeatmap = false;
        this.containerRef = React.createRef();
        this.config = props.config;
        this.blocks = props.blocks;
        this.seatClick = props.seatClick;
        this.className = props.className;
    }


    public getSelectedSeats(){
        return this.seatMap.data.getSelectedSeats()
    }

    public replaceData(blocks){
        this.blocks = blocks;
        this.seatMap.data.replaceData(this.blocks);
    }

    public zoomToVenue(){
        this.seatMap.zoomManager.zoomToVenue();
    }


    componentDidMount() {
        if(!this.blocks){
            throw new Error('Blocks data not found')
        }
        if (this.mountSeatmap) {
            this.seatMap = new SeatMapCanvas("#seatmap-container", this.config);
            if (this.seatClick) {
                this.seatMap.eventManager.addEventListener("SEAT.CLICK", this.seatClick);
            }

            this.seatMap.data.replaceData(this.blocks);
            this.zoomManager = this.seatMap.zoomManager
        }

        this.mountSeatmap = true;
    }

    render() {
        return (
            <div className={this.className} style={{height: '100%'}} id={'seatmap-container'}></div>
        );
    }
}

export default Seatmap;