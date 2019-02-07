import React from 'react';
import OrderItem from './OrderItem';
export default class extends React.Component{
    handleClick = (ddd) =>{

    }
    render(){
      const {orders} = this.props;
      return(
        <div className='container-fluid'>
          {orders.map(order => <OrderItem order={order} handleClick={this.handleClick}/>)}
        </div>
      );
    }
}