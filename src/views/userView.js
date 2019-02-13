import React from 'react';
import {connect} from 'react-redux';
import * as AllActions from '../redux/Thunks';
import { bindActionCreators } from 'redux';
import Header from '../components/common/Header';
import AdminDashboard from '../components/admin';
import UserDashboard from '../components/customer';
import M from 'materialize-css';


export class UserView extends React.Component{
    state = {
      nav : {
        navItem1: {name: 'menu', action: ()=>this.displayPage('foodItems', 'foodItems')},
        navItem2: {name: 'myOrders'},
        navItem3: {name: 'history'}
      },
      adminProp: this.props.newOrders || [],
      foodItems: this.props.foodItems || []
    }

    componentDidMount(){
      document.addEventListener('click', () => {
        let elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
      });
      const Admin = localStorage.getItem('Admin');
      if (Admin==='true') {
        this.setState({
          nav:{
            navItem1: {name: 'Orders', action: ()=>this.displayPage('adminProp', 'newOrders')},
            navItem2: {name: 'pending', action: ()=>this.displayPage('adminProp', 'allPendingOrders')},
            navItem3: {name: 'archived', action: ()=>this.displayPage('adminProp', 'allArchivedOrders')}
          }
        });
      }
    }

    displayPage = (prop, page) => this.setState({ [prop]: this.props[page] || [] });
    logOut = () =>{
      localStorage.clear();
      this.props.history.push('/');
    }
    getRoute = (pathname, adminProps, userProps) =>{
      switch (pathname) {
        case 'admin':
          return(
            <AdminDashboard {...adminProps}/>
          );

        case 'user':
          return(<UserDashboard foodItems={userProps}/>);
      
        default:
          break;
      }
    }
    render(){
      const {adminProp, nav, foodItems} = this.state;
      const adminProps = {adminProp};
      const route = this.props.match.params.route;
      return(
        <div id='dash'>
          <Header logout={this.logOut} nav={nav}/>
          {this.getRoute(route, adminProps, foodItems)}
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