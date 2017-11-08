import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'




class AppMenu extends Component {
    render() {
        const { menus, onRequestClose, classes } = this.props
        //const { classes } = this.props
        // {renderNavItems(props, context.pages, context.activePage)}
        // {renderNavItems(this.props, pages, pages[0])}
        //console.log("menu" + JSON.stringify(this.props))
        return (
            <Menu menus= {menus} classes= {classes}
              onRequestClose={onRequestClose}>
                Loading...
              </Menu>
        )
    }
}
/*
                <ul className={classes.ul}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/abouts">About</Link></li>
                    <li><Link to="/shoelaces">Shoelaces</Link></li>

                    <li><Link to="/counters">counters</Link></li>
                    <li><Link to="/users">users</Link></li>
                    <li><Link to="/ecomms">ecomms</Link></li>
                </ul>
*/

AppMenu.propTypes = {
    //classes: PropTypes.object.isRequired,
    //onRequestClose: PropTypes.func.isRequired,
    menus: PropTypes.array.isRequired,
}

export default (AppMenu)