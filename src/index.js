import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    render() {
        return <div>YO</div>;
    }
}

const wrapper = document.querySelector('#container');
wrapper && ReactDOM.render(<Button />, wrapper);
