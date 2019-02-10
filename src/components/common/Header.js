import React from 'react';

export default class extends React.Component{
  render(){
    const {nav: { navItem1, navItem2, navItem3 }, logout} = this.props;
    const Admin = localStorage.getItem('Admin');
    return(
      <nav className="amber darken-3">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo"><i>lule foods</i></a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right">
            <li><a onClick={navItem1.action}>{navItem1.name}</a></li>
            <li><a onClick={navItem2.action}>{navItem2.name}</a></li>
            <li><a onClick={navItem3.action}>{navItem3.name}</a></li>
            {Admin==='true' ? <li><a>Cpanel</a></li> : ''}
            <li><a onClick={logout}>Logout</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
