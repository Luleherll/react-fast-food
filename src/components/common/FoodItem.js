import React from 'react';

function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}
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
        <form className="collapsible-body">
          <div className='center-align order'>Name: {foodItem.name}</div>
          <div className='center-align order'>Price: {foodItem.price}</div>
          Quantity:

          Comment: <textarea id="textarea1" className="materialize-textarea" defaultValue="As usual.."></textarea>
          <div className='center-align'>
            <button className='waves-effect waves-light btn amber darken-3 hoverable'>order now</button>
          </div>
        </form>
      </li>
    );
  }
}
 
export default FoodItem;