import React from 'react';
import Header from '../header'
import Menu from '../menu'
import './index.css'

export default class Layout extends React.Component {
  state = {
    open: false
  };

  toggleDrawer = (open) => () => {
    this.setState({
      open
    });
  };

  render() {
    const {children} = this.props
    return (
      <div className="root">
        <Header toggleDrawer={this.toggleDrawer}/>
        <Menu open={this.state.open} toggleDrawer={this.toggleDrawer}/>
        <div className="container">
          {children}
        </div>
      </div>
    );
  }
}
