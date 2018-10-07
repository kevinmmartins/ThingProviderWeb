import React, { Component } from 'react';
import '../css/pure-min.css';
import '../css/side-menu.css';
import '../css/app.css';
import githubLogo from '../images/github.png';

class OpenSource extends Component {

    render() {
        return (
                <div className="content">
                    <h2 className="content-subhead">Vamos construir o ThingProvider juntos !</h2>
                    <p>
                        Todo o projeto é open-source ! Venha aprender conosco.
                    </p>

                    <div>
                        <ul>
                            <li className="App-ul">
                                <a href="https://github.com/kevinmmartins/ThingProvider">
                                    <img src={githubLogo} className="App-logo" alt="Github" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default OpenSource;
