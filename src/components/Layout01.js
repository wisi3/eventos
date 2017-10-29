import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {routes} from '../routes'


const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const SidebarExample = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '20%',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/home">Home</Link></li>
           <li><Link to="/tacos">Tacos</Link></li>
           <li><Link to="/tacos/bus">Bus</Link></li>
           <li><Link to="/tacos/cart">Cart</Link></li>

        <li><Link to="/sandwiches">Sandwiches</Link></li>
        <li><Link to="/categorias">CRUD Categorias</Link></li>
        <li><Link to="/categorias/list">Categoria List</Link></li>

        </ul>
       
      </div>

      <div style={{ flex: 1, padding: '10px' }}>
        {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
      </div>
    </div>
  </Router>
)

export default SidebarExample
