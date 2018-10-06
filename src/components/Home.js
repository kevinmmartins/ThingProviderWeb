import React, { Component } from 'react';
import '../css/pure-min.css';
import '../css/side-menu.css';
import '../css/app.css';

class Home extends Component {

    render() {
        return (
            <div>
                <div id="main">
                    <div className="content">
                        <h2 className="content-subhead">Sobre o projeto</h2>
                        <p>
                            Este trabalho apresenta um modelo para aplicação de serviços na arquitetura da IOT visando ambientes
                            locais onde o compartilhamento de informações entre diversos sistemas se mostre necessário.
                            Para propor uma arquitetura diferente da comum monolítica aplicada comumente em projetos
                            de menores escalas será utilizado web services restfull proporcionando a possibilidade
                            do consumo das informações para os mais diversos sistemas em que está se mostre necessária
                        </p>

                        <div className="pure-g">
                            <div className="pure-u-1-1">
                                <img className="pure-img-responsive" src="https://user-images.githubusercontent.com/20428703/38177975-3c21b5d4-35df-11e8-8193-aff06af8f356.png" alt="ThingProvider logo"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
