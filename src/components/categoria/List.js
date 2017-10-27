import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getList } from '../../actions/categoria-action'

class List extends Component {
    componentWillMount() {
        this.props.getList("");
    }
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
    list: PropTypes.array
}

const mapStateToProps = (state) => {
    return { list: state.categoria.list }
}
export default connect(mapStateToProps, {
    getList
})(List)