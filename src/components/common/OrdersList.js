import React from 'react';
import OrderItem from './OrderItem';
import M from 'materialize-css';

export default class extends React.Component{

  componentDidMount(){
    document.addEventListener('click', () => {
      let elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    });
  }
    handleClick = (ddd) =>{

    }
    render(){
      const {orders} = this.props;
      return(
        <ul className='collapsible popout'>
          {orders.map(order => <OrderItem order={order} handleClick={this.handleClick}/>)}
        </ul>
      );
    }
}