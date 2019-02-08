import React from 'react';

export default class extends React.Component{
  state = {}
  
  UNSAFE_componentWillReceiveProps(nextProps){
    const {status}= nextProps.order;
    this.viewOrder(status);
  }

  UNSAFE_componentWillMount(){
    this.viewOrder(this.props.order.status)
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
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src={img1} alt="" className="circle responsive-img" />
            </div>
            <div className="col s10">
              <span className="grey">{quantity} {name}</span>
              <div> {dateProp}: <span id="date">{ended_at || created_at}</span></div>
              <div>From: {location} </div>
              <div> Amount: {amount} </div>
              <div></div>
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
          </div>
        </div>
      </div>
        
    );
  }
  
}