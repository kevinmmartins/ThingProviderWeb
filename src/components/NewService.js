import React, { Component } from 'react';
import '../css/pure-min.css';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const initialState = {
    service: {
        name: '',
        method: '',
        endpoints: []
    }
}

const methods = [
    "GET", "PUT"
];

class NewService extends Component {

    constructor(props) {
        super(props)
        this.state = Object.assign({}, initialState)
        this.changedValue = this.changedValue.bind(this);
        this.save = this.save.bind(this);
    }

    changedValue(event) {
        const newService = Object.assign({}, this.state.service)
        newService[event.target.name] = event.target.value
        this.setState({ service: newService })
    }

    save() {
        console.log(this.state.service);
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="content-subhead">Novo serviço</h2>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Nome"
                        value={this.state.service.name}
                        onChange={this.changedValue}
                        margin="normal"
                    />
                    <TextField
                        id="method"
                        select
                        label="Método"
                        value={this.state.service.method}
                        onChange={this.changedValue}
                        helperText="Selecione o método"
                        margin="normal"
                    >
                        {methods.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </form>
            </React.Fragment>
        );
    }
}

export default NewService;