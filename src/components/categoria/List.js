import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
    render() {
        console.log(JSON.stringify(this.props))

        return (
            <div>
                Categoria List

            </div>
        )
    }
}
List.propTypes = {
    lista: PropTypes.array
}
export default List