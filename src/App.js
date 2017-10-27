import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      codigo: "",
      nombre: ""
    }
  }
  handleInputChange= event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  accion = e => {
    console.log('d=' + JSON.stringify(this.state));
  }
  render() {
    return (
      <div className="App">
        <form>
          <label>Codigo:
            <input type="text" 
            value={this.state.codigo}
            onChange={this.handleInputChange}
            name="codigo" />
          </label><br />
          <label>Nombre:
            <input type="text" 
            value={this.state.nombre}
            onChange={this.handleInputChange}
            name="nombre" />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <button onClick={() => this.accion("gg")}>
          Accion
    </button><br />
        {this.state.nombre}
        
      </div>
    );
  }
}

export default App;