import React from 'react';
import FoodItem from './FoodItem';
import M from 'materialize-css';

class  FoodList extends React.Component {
  componentDidMount(){
    document.addEventListener('click', () => {
      let elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    });
    document.addEventListener('mouseUp', () => {
      let elems = document.querySelectorAll('.tooltipped');
      M.Tooltip.init(elems);
    });
  }

  render() {
    const {foodItems} = this.props;
    console.log(foodItems);
    return (
      <ul className="collapsible popout">
        {foodItems.map(foodItem => <FoodItem foodItem={foodItem} />)}
      </ul>
    );
  }
}
 
export default FoodList;