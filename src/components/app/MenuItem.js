import React from 'react';
import PropTypes from 'prop-types';



import {
  Route,
  Link
} from 'react-router-dom'

import './Menu.css'; 


class MenuItem extends React.Component<any, any> {
  static defaultProps = {
    openImmediately: false,
  };

  state = {
    open: false,
  };

  componentWillMount() {
    if (this.props.openImmediately) {
      this.setState({ open: true });
      //console.log("MenuItem.componentWillMount.open:" + this.state.open)
    }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
    //console.log("MenuItem.handleClick.open:" + this.state.open)
  };

  render() {


    let { path, title, novisible, replace, icon } = this.props;
    let { children, isChildren } = this.props;
    //console.log("MenuItem children : "+JSON.stringify(children) )
    // let { classes,  } = this.props;
    const { openImmediately } = this.props;
    //console.log("MenuItem.novisible:" + novisible)
    //console.log("openImmediately:"+openImmediately)
    if (path) {
      //console.log("MenuItem.isChildren:"+isChildren)
      if (novisible) {
        //console.log("MenuItem.path:"+path)
        if (replace) {
          return (
            <Route exact path={replace}
            />
          )

        } else
          return (
            <Route exact path={path}
            />
          )

      } else {


        return (
          <Route path={path}
            children={({ match }) => {

              if (replace) {

                path = replace
              }

              return (
                <Link to={path}>

                  <div onClick={this.props.onClick}
                    className={match ? (isChildren ? 'navToggleLinkActive ' : 'navLinkActive') : (isChildren ? 'navToggleLink' : 'navLink')}
                  ><i className={`fa fa-${icon}`}> </i>
                    {match ? '> ' : ''}
                    &nbsp;{title}


                  </div>
                </Link>
              )
            }} />
        )
       
      }

    }


  
    return (
      <div className={(openImmediately ? 'navToggleActive' : 'navToggle')}>
        <div className='navToggleTitle'>
          <button href='#' className='navToggleTitleButton' onClick={this.handleClick} >
            <i className={`fa fa-${icon}`}> </i>
            &nbsp;{title}
            <span className="pull-right  ">
              {this.state.open ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}
            </span>

          </button>
        </div>

        <div
          className={(this.state.open ? 'navToggleMore' : 'navToggleLess')}
        >
          {children}
        </div>
      </div>
    );
  }
}

MenuItem.propTypes = {
  children: PropTypes.node,
  //classes: PropTypes.object.isRequired,
  path: PropTypes.string,
  onClick: PropTypes.func,
  openImmediately: PropTypes.bool,
  title: PropTypes.string.isRequired,
  isChildren: PropTypes.bool,
  visible: PropTypes.bool,
};

export default MenuItem;
