import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class MyCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        // this.handleClick = this.handleClick.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }

    // handleClick() {
    //     const canvas = this.canvas.current;
    //     const ctx = canvas.getContext('2d');
    //     ctx.strokeStyle = "#7c8b8c";
    //     ctx.line(90, 130, 320, 210);
    // }

    onMouseDown = (e) => {
        const canvas = this.canvas.current;
        const ctx = canvas.getContext('2d');
        console.log('mouse down');
        console.log('x:' + (e.clientX - canvas.offsetLeft) + 'y:' + (e.clientY - canvas.offsetTop));
    }

    onMouseUp = (e) => {
        const canvas = this.canvas.current;
        const ctx = canvas.getContext('2d');
        console.log('mouse up');
        console.log('x:' + (e.clientX - canvas.offsetLeft) + 'y:' + (e.clientY - canvas.offsetTop));
    }

    line(x, y, x1, y1) {
        this.save();
        this.beginPath();
        this.moveTo(x, y);
        this.lineTo(x1, y1);
        this.stroke();
        this.restore();
    }

    componentDidMount() {
        const canvas = this.canvas.current;
        const ctx = canvas.getContext('2d');
        (function () {
            Object.getPrototypeOf(ctx).line = function (x, y, x1, y1) {
                this.save();
                this.beginPath();
                this.moveTo(x, y);
                this.lineTo(x1, y1);
                this.stroke();
                this.restore();
            }
        })();

    }


    render() {
        return (
            <canvas
                height="600px" width="800px" ref={this.canvas}
                onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
            </canvas>
        );
    }

}

class App extends React.Component {
    render() {
        return (
            <MyCanvas/>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);