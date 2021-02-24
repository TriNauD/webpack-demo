import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class MyCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    handleMouseDown = (e) => {
        const canvas = this.canvas.current;
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = "#66ccff";
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.beginPath();
        onmousemove = function (e) {
            ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            ctx.stroke();
        }
        onmouseup = function () {
            onmousedown = onmousemove = null;
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <canvas
                height="600px" width="800px" ref={this.canvas}
                onMouseDown={this.handleMouseDown}>
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
