import React, { Component } from 'react';
import '../css/pure-min.css';

class Endpoints extends Component {

    constructor(props) {
        super(props)

        this.state = {
            endpoints: this.props.endpoints
        }

    }

    render() {
        const endpointsList = [];
        for (const service of this.state.endpoints) {
            endpointsList.push(
                <h3>{service.name}</h3>
            );
        }
        return (
            <React.Fragment>
                <h2 className="content-subhead">Endpoints</h2>
                {endpointsList}
            </React.Fragment>
        );
    }
}

export default Endpoints;