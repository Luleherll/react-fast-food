import React from 'react';

export default class extends React.Component{
  render(){
    const {displayPage, displayCpanel} = this.props;
    return(
      <nav className="amber darken-3">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo"><i>lule foods</i></a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right">
            <li><a onClick={()=>displayPage('newOrders')}>Orders</a></li>
            <li><a onClick={()=>displayPage('allPendingOrders')}>Pending</a></li>
            <li><a onClick={()=>displayPage('allArchivedOrders')}>Archive</a></li>
            <li><a onClick={displayCpanel}>Cpanel</a></li>
            <li><a href="mobile.html">Logout</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
