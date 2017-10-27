import React from 'react'

import {
     Route,
  Link
} from 'react-router-dom'
import CategoriaList from './components/categoria/List'

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

////

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
const Sandwiches = () => <h2>Sandwiches</h2>

const Tacos = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

const routes = [
  { path: '/home',
    component: Home
  },
{ path: '/sandwiches',
    component: Sandwiches
  },
  { path: '/tacos',
    component: Tacos,
    routes: [
      { path: '/tacos/bus',
        component: Bus
      },
      { path: '/tacos/cart',
        component: Cart
      }
    ]
  },
{ path: '/categorias',
    component: Tacos,
    routes: [
      { path: '/categorias/list',
        component: CategoriaList
      },
      { path: '/tacos/cart',
        component: Cart
      }
    ]
  }
]

export {routes}