import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CategoriaList extends Component {
    render() {
        console.log(JSON.stringify(this.props))
        const {saludo, lista } = this.props
        return (
            <div>
                Categoria List
                {saludo}
                <ul>
          {lista.map((d, i) => (
            <li key={i}>{i + 1}: {d.codigo} - {d.nombre}</li>

          ))}
        </ul>
            </div>
        )
    }
}
CategoriaList.propTypes = {
    saludo: PropTypes.string.isRequired
}
export default CategoriaList