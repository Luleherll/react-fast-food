import React from 'react';
import {connect} from 'react-redux';
import * as AllActions from '../actions/Thunks';
import { bindActionCreators } from 'redux';
import Header from '../components/common/Header';
import AdminDashboard from '../components/admin';


class UserView extends React.Component{
    state = {
      nav : {
        navItem1: this.showAllOrders,
        navItem2: this.showPendingOrders,
        navItem3: this.showArchivedOrders
      },
      adminProp: this.props.newOrders || [],      
    }
    displayPage = page => this.setState({ adminProp: this.props[page] || [] });
    render(){
      const {adminProp} = this.state;
      const adminProps = {adminProp};
      const Admin = localStorage.getItem('Admin');
      return(
        <div id='dash'>
          <Header displayPage={this.displayPage}/>
          { Admin ? <AdminDashboard {...adminProps}/> : ''}
        </div>
      );
    }
}

const mapStateToProps = ({food, orders}) =>({
  foodItems: food.foodItems,
  userPendingOrders: food.userPendingOrders,
  userOrderHistory: food.userOrderHistory,
  newOrders: orders.newOrders,
  allPendingOrders: orders.allPendingOrders,
  allArchivedOrders: orders.allArchivedOrders,
});
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(AllActions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView);