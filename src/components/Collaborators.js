import React, { Component } from 'react';
import '../css/pure-min.css';
import kevinPerfil from '../images/kevin.jpg';
import '../css/collaborators.css';
import Linkedin from './Linkedin';

class Collaborators extends Component {

    render() {
        return (
            <div className="content">
                <h2 className="content-subhead">Colaboradores</h2>
                <h3>Kevin Martins</h3>
                <div className="pure-g">
                    <div className="pure-u-1-2"> <img src={kevinPerfil} className="Collaborators-Perfil" alt="Kevin" /> </div>
                    <div className="pure-u-1-2"> 
                        <p>Desenvolvedor Full Stack,graduando em engenharia de telecomunicações pela Puc Campinas,responsável pela arquitetura do ThingProvider e sênior em responder emails.</p>
                        <Linkedin url='https://www.linkedin.com/in/kevinmmartins/'/> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Collaborators;