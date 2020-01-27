import React, { Component } from 'react';
import { Content, Row, Col } from 'adminlte-2-react';

class Home extends Component {
  state = {
    remind: false,
    remind2: true
  }

  render() {
    return (
      <Content
        title="ShopList"
        subTitle="Tieni sotto controllo la tua spesa"
        browserTitle="Home - ShopList"
      >
      </Content>
    );
  }
}

export default Home;
