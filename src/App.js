import React from 'react';
import './index.css';
import './assets/firstnoodle-v1.0/style.css';
import { Button } from './components/Button';
import { Icon } from './components/Icon';
import { Pagination } from './components/Pagination';

class App extends React.Component {

    handleClick = (event) => {
        console.log(event);
    };

    render() {
        return (
            <div className="App">
                <Icon icon="angle-left" />
                <Button onClick={this.handleClick} size="sm">
                    CLICK
                </Button>
                <Pagination />
            </div>
        );
    }
}

export default App;

