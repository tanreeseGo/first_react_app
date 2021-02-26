import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name : "Sean", age :"50", belt : "white", id : 1},
      {name : "Ryu", age :"40", belt : "green", id : 2},
      {name : "Yosh", age :"10", belt : "black", id : 3}
    ]
  }
  addNinja = (ninjaser) => {
    ninjaser.id = Math.random();
    let ninjases = [...this.state.ninjas, ninjaser];
    this.setState({
      ninjas: ninjases
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount() {
    console.log('mounted')
  }
  componentDidUpdate(hello, prevState) {
    console.log('updated')
    console.log(hello, prevState)

  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome:)</p>
        <Ninjas deleteNinja={this.deleteNinja}ninjas= {this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }

}

export default App;
