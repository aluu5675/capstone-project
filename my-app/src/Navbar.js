import React from 'react';
import { SearchBar } from './SearchBar.js';

let Component = React.Component;

export class Navbar extends Component {
    
    render() {
        return (
            <div>
                <div className="top-bar">
                    <img src='img/logo.png' alt="logo"></img>
                </div>
                <SearchBar></SearchBar>;
            </div>
        )
    }
}