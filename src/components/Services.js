import React, { Component } from 'react';
import '../css/pure-min.css';
import Request from '../util/Request';
import Moment from 'react-moment';
import Endpoints from './Endpoints';

class Services extends Component {

  constructor(props) {
    super(props)

    this.state = {
      services: [],
    }

    this.findServices = this.findServices.bind(this);
    this.normalizeData = this.normalizeData.bind(this);
  }

  componentDidMount() {
    this.findServices()
  }

  async findServices() {
    const dataResponse = await Request.get('/tps/');
    let dataNormalized = [];
    if (dataResponse) {
      dataResponse.data.forEach(element => {
        dataNormalized.push(this.normalizeData(element));
      });
    }
    this.setState({ services: dataNormalized });
  }

  normalizeData(element) {
    const newElement = {};
    newElement.name = element.name;
    newElement.method = element.method;
    if (element.lastUpdate) {
      newElement.lastUpdate = element.lastUpdate;
    }
    if (element.value) {
      newElement.value = JSON.stringify(element.value);
    }
    return newElement;
  }

  render() {
    const serviceList = [];
    for (const service of this.state.services) {
      serviceList.push(
        <tr key={service._id}>
          <td >{service.name}</td>
          <td >{service.method}</td>
          <td >
            <Moment format="DD/MM/YYYY HH:mm:ss">
              {service.lastUpdate}
            </Moment>
          </td>
          <td >{service.value}</td>
        </tr>
      );
    }
    return (
      <div className="content">
        <h2 className="content-subhead">Serviços</h2>
        <table className="pure-table pure-table-bordered">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Método</th>
              <th>Última atualização</th>
              <th>Último valor</th>
            </tr>
          </thead>
          <tbody>
            {serviceList}
          </tbody>
        </table>
        <Endpoints endpoints={this.state.services} />
      </div>
    );
  }
}

export default Services;