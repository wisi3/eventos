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
    saludo: PropTypes.string.isRequired,
    lista: PropTypes.array.isRequired
}
export default CategoriaList

/*

const mimatch = (match, location) => {
  if (match) {
    if (match.path.split('/', 3).length > 2) {
      return matchPath(location.pathname.split('/', 3).join('/') + '/list', {
        path: match.path.split('/', 3).join('/') + '/list',

      })
    } else
      return matchPath(location.pathname, {
        path: match.path,
        exact: false,
        strict: false

      })
  } else
    return null

}

*/

    /*
      console.log('to.split.length: ' + to.split('/').length)
      console.log('to.split: ' + JSON.stringify(to.split('/')))
      if (to.split('/').length === 3) {
        mito = to.split('/', 3).join('/') + '/list'
        console.log('to.splitx: ' + JSON.stringify(to.split('/')))
        
      }
      <button onClick={() => {

          console.log('The link was clicked.' + to)
          history.push(`${mito}`)
          
          {label}
        </button>
        }}>
  */
  