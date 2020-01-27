import React, { Component } from 'react';
import axios from 'axios';

import { Content, SimpleTable } from 'adminlte-2-react';

class Shops extends Component {
  state = {}

  componentDidMount() {
    axios.get('Data/supermercati.json')
      .then(res => {
        this.setState({ 'supermercati': res.data })
      });
  }

  render() {
    return (
      <Content
        title="Supermercati"
        subTitle="Gestisci l'elenco dei supermercati"
        browserTitle="Supermercati - ShopList"
      >
        <SimpleTable
          data={this.state.supermercati}
          columns={[
            { title: 'Nome', data: 'nome' },
            { title: 'Indirizzo', data: 'indirizzo' }
          ]}
        />
      </Content>
    );
  }
}

export default Shops;
