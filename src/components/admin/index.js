import React from 'react';
import NewOrdersList from '../common/OrdersList';


class AdminDashboard extends React.Component{

  render(){
    const { adminProp} = this.props;
    return(
      <div className="container">
        <NewOrdersList orders={adminProp} />
      </div>
    );
  }
}

export default AdminDashboard;

