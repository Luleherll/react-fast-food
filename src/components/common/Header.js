import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default class extends React.Component{
  render(){
    const {nav: { navItem1, navItem2, navItem3 }, logout} = this.props;
    const Admin = localStorage.getItem('Admin');
    return(
      <div>
        <nav className="amber darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo"><i>lule foods</i></a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><FontAwesomeIcon icon={faBars}/></a>
            <ul className="right hide-on-med-and-down">
              <li><a id="newOrder" onClick={navItem1.action}>{navItem1.name}</a></li>
              <li><a id="pendingOrder" onClick={navItem2.action}>{navItem2.name}</a></li>
              <li><a id="doneOrder" onClick={navItem3.action}>{navItem3.name}</a></li>
              {Admin==='true' ? <li><a>Cpanel</a></li> : ''}
              <li><a onClick={logout}>Logout</a></li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li><a id="newOrder2" onClick={navItem1.action}>{navItem1.name}</a></li>
          <li><a id="pendingOrder2" onClick={navItem2.action}>{navItem2.name}</a></li>
          <li><a id="doneOrder2" onClick={navItem3.action}>{navItem3.name}</a></li>
          {Admin==='true' ? <li><a>Cpanel</a></li> : ''}
          <li><a onClick={logout}>Logout</a></li>
        </ul>
      </div>
    );
  }
}
