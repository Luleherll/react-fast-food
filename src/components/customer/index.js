import React from 'react';
import FoodList from '../common/FoodList';


class UserDashboard extends React.Component {
  render() {
    const {foodItems} = this.props;
    return (
      <div className="container">
        <FoodList foodItems={foodItems}/>
      </div>
      
    );
  }
}
 
export default UserDashboard;