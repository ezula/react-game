import React, { Component } from 'react';
import styles from './canvas.css'
import create2DArray from '../app/game/utils';

const sizeX = 800;
const sizeY = 600;
const rectSize = 50;

export default class Canvas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            grid: create2DArray(sizeX / rectSize, sizeY / rectSize)
        };
    }

    handleMouseDown = (event) => {
        const { grid } = this.state;

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        const x = event.x - canvas.offsetLeft;
        const y = event.y - canvas.offsetTop;

        const gridX = Math.floor(x / rectSize);
        const gridY = Math.floor(y / rectSize);

        if (grid[gridX][gridY] === 0) {
            this.drawOrRemoveDot(ctx, gridX, gridY, false);
            grid[gridX][gridY] = 1;
        } else {
            this.drawOrRemoveDot(ctx, gridX, gridY, true);
            grid[gridX][gridY] = 0;
        }
    };

    handleMouseMove = (event) => {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        const x = event.x - canvas.offsetLeft;
        const y = event.y - canvas.offsetTop;

        ctx.font = "20px Courier";
        ctx.fillStyle = '#000';
        ctx.fillRect(3, 1, 176, 30);
        ctx.fillStyle = '#FFF';
        ctx.fillText(`X: ${x}, Y: ${y}`, 5, 20);
    }

    drawOrRemoveDot = (ctx, gridX, gridY, remove) => {

        const even = Boolean((gridX + gridY) % 2);

        const cX = gridX * rectSize;
        const cY = gridY * rectSize;

        if (remove) {
            ctx.fillStyle = even ? '#007f00' : '#009900';
            ctx.fillRect(cX,cY, rectSize, rectSize);
        } else {
            ctx.beginPath();
            ctx.arc(cX + (rectSize / 2), cY + (rectSize / 2), 18, 0, 2 * Math.PI);
            ctx.fillStyle = '#FFF';
        }
        
        ctx.fill();
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        canvas.addEventListener("mousedown", this.handleMouseDown, false);
        canvas.addEventListener("mousemove", this.handleMouseMove, false);
        const ctx = canvas.getContext("2d");

        let even = false;
        const iterationsX = sizeX / rectSize;
        const iterationsY = sizeY / rectSize;

        for (let x=0; x<iterationsX; x++) {
            even = !even;
            for (let y=0; y<iterationsY; y++) {
                ctx.fillStyle = even ? '#009900' : '#007f00';
                ctx.fillRect(x*rectSize,y*rectSize, rectSize, rectSize);
                even = !even;
            }
        }
        ctx.stroke();
    }

    render() {
        const { gridX, gridY } = this.state;

        const gridSizeX = sizeX / rectSize;
        const gridSizeY = sizeY / rectSize;

        return (
            <div>
                <canvas ref="canvas" width={800} height={600} />
                <div className={styles.bottom}>
                    <p>Grid size: X: {gridSizeX}, Y: {gridSizeY}</p>
                </div>
            </div>
        );
    }
}