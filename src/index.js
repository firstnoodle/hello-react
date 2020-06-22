import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    render() {
        return <div className="text-teal-800 font-bold text-xl">YOLO</div>;
    }
}

const wrapper = document.querySelector('#container');
wrapper && ReactDOM.render(<Button />, wrapper);
