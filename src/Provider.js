import React, { Component } from 'react';
const Context = React.createContext();
const { Consumer } = Context;

class Provider extends Component {
  state = {
    name: 'Lucas'
  }

  toggleLastName = () => {
    this.setState((prevState) => ({
      name: (prevState.name === 'Lucas') ? prevState.name + ' Ferreira' : 'Lucas',
    }));
  }


  render() {
    const { toggleLastName } = this;
    const { isLogged, name } = this.state;
    return (
      <Context.Provider value={{ toggleLastName, isLogged, name }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}


export { Consumer, Provider };
