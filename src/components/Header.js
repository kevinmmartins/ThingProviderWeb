import React, { Component } from 'react';
import '../css/pure-min.css';
import '../css/side-menu.css';
import '../css/app.css';
import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div>
                <a href="#menu" id="menuLink" className="menu-link">
                </a>
                <div id="menu">
                    <div className="pure-menu">
                        <a className="pure-menu-heading">ThingProvider</a>

                        <ul className="pure-menu-list">
                            <li className="pure-menu-item">
                                <Link className="pure-menu-item" to='/'>Home</Link>
                            </li>

                            <li className="pure-menu-item">
                                <Link className="pure-menu-item" to='/services'>Serviços</Link>
                            </li>

                            <li className="pure-menu-item">
                                <Link className="pure-menu-item" to='/colaborators'>Colaboradores</Link>
                            </li>

                            <li className="pure-menu-item">
                                <Link className="pure-menu-item" to='/open'>Repositório</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
