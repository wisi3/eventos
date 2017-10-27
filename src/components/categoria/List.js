import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


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

const mapStateToProps = (state) => {
    return { list: state.categoria.list }
}
export default connect(mapStateToProps)(List)