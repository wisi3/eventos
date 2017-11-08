import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import { RouteWithSubRoutes } from '../node_m/react-router-dom-ext'
import { findActiveNodeRoute } from '../node_m/react-router-dom-ext'

import {
  Route,
  Link
} from 'react-router-dom'
import { routes } from '../routes'

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact, replace }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
    let mito = to
    console.log('replace: ' + replace)
    if (replace) {
      mito = replace
    }
    return <div className={match ? 'active' : ''}>
      {match ? '> ' : ''}<Link to={mito} >{label}</Link>
    </div>
  }} />
)

class SidebarExample extends React.Component {

  render() {
    let { location } = this.props
    //console.log('location:' + JSON.stringify(location))

    const { title } = findActiveNodeRoute(routes, location)
    //console.log('activePage:' + JSON.stringify(activePage))
    //console.log('title:' + JSON.stringify(title))

    return (
      <div style={{ display: 'flex' }}>
        <div style={{
          padding: '10px',
          width: '20%',
          background: '#f0f0f0'
        }}>
          <div style={{ listStyleType: 'none', padding: 0 }}>

            <OldSchoolMenuLink to="/home" label="Home" />
            
            <OldSchoolMenuLink to="/tacos" label="TACOS" />
            <OldSchoolMenuLink to="/tacos/bus" label="Tacos Bus" />
            <OldSchoolMenuLink to="/tacos/cart" label="Tacos Cart" />

            <OldSchoolMenuLink to="/catalogo" label="CATALOGO" />
            <OldSchoolMenuLink to="/catalogo/categorias" label="Categorias" replace='/catalogo/categorias/list' />

            <OldSchoolMenuLink to="/sandwiches" label="Sandwiches" />
           
          </div>
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          <title>
            {title.parent ? title.parent + (title.children ? ' > ' : '') + title.children : title.children}
            - System
              </title>
          <h2 >
            {title.parent ? title.parent + (title.children ? ' > ' : '') + title.children : title.children}
          </h2>
          <hr />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(SidebarExample)
