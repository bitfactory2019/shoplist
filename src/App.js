import React, { Component } from 'react';
import AdminLTE, { Sidebar } from 'adminlte-2-react';

import { Home, Shops } from './Pages';

const { Item } = Sidebar;

class App extends Component {
  sidebar = [
    <Item icon="fa-home" key="home" text="Home" to="/" />,
    <Item icon="fa-store" key="shops" text="Supermercati" to="/shops">
      <Item icon="fa-plus" key="shops-add" text="Aggiungi supermercato" to="/shops-add" />
    </Item>
  ]

  render() {
    return (
      <AdminLTE
        title={["Shop", "List"]}
        titleShort={["S", "L"]}
        theme="blue"
        sidebar={this.sidebar}
      >
        <Shops path="/shops" />
        <Shops path="/shops-add" />
        <Home path="/" />
      </AdminLTE>
    );
  }
}

export default App;
