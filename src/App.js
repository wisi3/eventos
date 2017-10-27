import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const lista = [
      {
        codigo: "01",
        nombre: "Juan"
      },
      {
        codigo: "02",
        nombre: "Alex"
      }
    ]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      codigo: "",
      nombre: ""
    }
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  accion = e => {
    console.log('e=' + e)
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log('d=' + JSON.stringify(this.state))

  }
  render() {
    
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
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
        <ul>
          {lista.map((d, i) => (
            <li key={i}>{i+1}: {d.codigo} - {d.nombre}</li>

          ))}
        </ul>
      </div>
    );
  }
}

export default App;