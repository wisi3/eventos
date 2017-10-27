import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getList } from '../../actions/categoria-action'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            q: "",
        }
    }

    componentWillMount() {
        this.props.getList(this.state.q)
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
        this.props.getList(this.state.q)
    }

    render() {
        console.log(JSON.stringify(this.props))
        const { list } = this.props
        return (
            <div>
                Categoria List
<label>Nombre:
            <input type="text"
                        value={this.state.q}
                        onChange={this.handleInputChange}
                        name="q" />
                </label>


                <ul>
                    {list.map((d, i) => (
                        <li key={i}>{i + 1}: {d.codigo} - {d.nombre}</li>
                    ))}
                </ul>
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