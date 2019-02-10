import React from 'react';

export default class extends React.Component{
  state = {}
  
  UNSAFE_componentWillReceiveProps(nextProps){
    const {status}= nextProps.order;
    this.viewOrder(status);
  }

  UNSAFE_componentWillMount(){
    this.viewOrder(this.props.order.status);
  }

  viewOrder  = status =>{
    switch (status) {
      case 'Queued':
        return (this.setState({
          btnName1: 'accept',
          btnName2: 'decline',
          classNames1: 'waves-effect waves-light btn amber darken-3 hoverable',
          classNames2: 'waves-effect waves-light btn grey darken-1 hoverable margin',
          data1: { status: 'Pending' },
          data2: { status: 'Declined' },
          dateProp: 'Ordered at'
        }));
        
      case 'Pending':
        return (this.setState({
          btnName1: 'complete',
          classNames1: 'waves-effect waves-light btn amber darken-3 hoverable',
          classNames2: 'waves-effect waves-light btn grey darken-1 hoverable margin hide',
          data1: { status: 'Completed' },
          dateProp: 'Started at'
        }));
        

      case 'Declined':
        return (this.setState({
          classNames1: 'waves-effect waves-light btn amber darken-3 hoverable hide',
          classNames2: 'waves-effect waves-light btn grey darken-1 hoverable margin',
          btnName2: 'delete',
          data2: null,
          dateProp: 'Ended at'
        }));
        

      case 'Completed':
        return (this.setState({
          classNames1: 'waves-effect waves-light btn amber darken-3 hoverable hide',
          classNames2: 'waves-effect waves-light btn grey darken-1 hoverable margin',
          btnName2: 'delete',
          data2: null,
          dateProp: 'Ended at'
        }));
        
    }
  }
  render(){
    const {
      order: {
        img1, created_at, name,
        location, amount, quantity,
        ended_at, status},
      handleClick
    } = this.props;
    
    const {btnName1, btnName2, data1, data2, classNames1, classNames2, dateProp} = this.state;
    return(
      <li>
        <div className="collapsible-header hoverable tooltipped" data-position="bottom" data-tooltip="I am a tooltip">
          <div className='center-align'>
            <img src={img1} alt="" className="circle"/>
          </div>
          <div>
            <span className="grey">{quantity} {name}</span>
            <div>From: {location} </div>
            <div> Amount: {amount} </div>
            
            <div> {dateProp}: <span id="date">{ended_at || created_at}</span></div>
          </div>
        </div>
        <div className="collapsible-body center-align">
          <button
            id="accept"
            className={classNames1}
            onClick={()=>handleClick(data1)}>
            {btnName1}
          </button>
          <button
            id="decline"
            className={classNames2}
            onClick={()=>handleClick(data2)}>
            {btnName2}
          </button>
        </div>
      </li>
        
    );
  }
  
}