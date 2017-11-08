import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import AppLayout from './app/Layout01'

import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'

class App extends Component {
    componentWillMount() {
    }

    render() {


        return (
                <Router>
                    
                    <AppLayout >
                    </AppLayout >
                </Router>
        )
    }
}

App.propTypes = {
    dark: PropTypes.bool.isRequired,
}
const mapStateToProps = (state) => {
    return { dark: state.theme.dark }
}
export default connect(mapStateToProps, {

})(App)