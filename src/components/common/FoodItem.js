import React from 'react';
class FoodItem extends React.Component {
  render() {
    const {foodItem} = this.props;
    return ( 
      <li>
        <div className="collapsible-header hoverable tooltipped" data-position="bottom" data-tooltip="I am a tooltip">
          <div className='center-align'>
            <img src={foodItem.img1} alt="" className="circle"/>
            <img src={foodItem.img2} alt="" className="circle"/>
            <img src={foodItem.img3} alt="" className="circle"/>
          </div>
        </div>
        <div className="collapsible-body">
          <div className='center-align order'>Name: {foodItem.name}</div>
          <div className='center-align order'>Price: {foodItem.price}</div>
          <div className='center-align'>
            <button className='waves-effect waves-light btn amber darken-3 hoverable'>order now</button>
          </div>
        </div>
      </li>
    );
  }
}
 
export default FoodItem;