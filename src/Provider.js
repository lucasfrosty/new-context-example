import React, { Component } from 'react';
const Context = React.createContext();
const { Consumer } = Context;

class Provider extends Component {
  state = {
    isLogged: false,
    name: 'Lucas'
  }


  render() {
    const { isLogged, name } = this.state;
    return (
      <Context.Provider value={{ isLogged, name }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}


export { Consumer, Provider };
