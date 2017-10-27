import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getList } from '../../actions/categoria-action'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            codigo: "",
            nombre: ""
        }
    }

    componentWillMount() {

    }
    handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })

    }
    handleSubmit = event => {
    event.preventDefault()
    console.log('d=' + JSON.stringify(this.state))

  }

    render() {
        console.log(JSON.stringify(this.props))
        //const { list } = this.props
        return (
            <div>
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

            </div>
        )
    }
}
Form.propTypes = {
    // list: PropTypes.array
}
const mapStateToProps = (state) => {
    //return { list: state.categoria.list }
}
export default connect(mapStateToProps, {

})(Form)