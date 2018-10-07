import React, { Component } from 'react';
import '../css/pure-min.css';
import linkedinLogo from '../images/linkedin.png';

class Linkedin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            url: this.props.url
        }

    }

    render() {
        return (
            <li className="App-ul">
                <a href={this.state.url}>
                    <img src={linkedinLogo} className="App-logo" alt="Linkedin" />
                </a>
            </li>
        );
    }
}

export default Linkedin;